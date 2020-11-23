package internal

import (
	"fmt"
	"github.com/tomwright/grpc-simple-js/internal/mapping"
	"google.golang.org/protobuf/compiler/protogen"
	"google.golang.org/protobuf/reflect/protoreflect"
	"log"
	"path/filepath"
	"strings"
	"text/template"
)

type messageMapperTemplateData struct {
	Message        *protogen.Message
	Package        string
	Prefix         string
	GrpcWebPackage string
}

var messageMapperTemplate = template.Must(template.New("messageMapper").
	Funcs(defaultFuncMap.toMap()).
	Parse(`
{{- $package := .Package -}}
{{- $grpcWebPackage := .GrpcWebPackage -}}
export const map{{ messageName .Message }}ToGrpcWeb = (input?: {{ messageType .Message }}): {{ $grpcWebPackage }}.{{ messageName .Message }} => {
	const result = new {{ $grpcWebPackage }}.{{ messageName .Message }}()
{{- range .Message.Fields }}
	{{ mapperToGrpcWebAssignMessageField . $package $grpcWebPackage }}
{{- end }}        
	return result
}

`))

type enumMapperMapperTemplateData struct {
	Enum           *protogen.Enum
	Package        string
	Prefix         string
	GrpcWebPackage string
}

var enumMapperMapperTemplate = template.Must(template.New("enumMapper").
	Funcs(defaultFuncMap.toMap()).
	Parse(`
{{- $package := .Package -}}
{{- $grpcWebPackage := .GrpcWebPackage -}}
export const map{{ enumNameWithPrefix .Enum }}ToGrpcWeb = (input?: {{ enumTypeWithPrefix .Enum }}): {{ $grpcWebPackage }}.{{ descriptorGrpcWebPrefix .Enum.Desc }}{{ enumName .Enum }} => {
	switch (input) {
{{- range .Enum.Values }}
		{{ mapperToGrpcWebEnumValueCase . $package $grpcWebPackage }}
{{- end }}     
	}
}

`))

func (p *Runner) writeMessageMappers(messages []*protogen.Message, out *protogen.GeneratedFile, currentPkg string, grpcWebPackage string) {
	for _, m := range messages {
		data := messageMapperTemplateData{
			Message:        m,
			Package:        currentPkg,
			Prefix:         mapping.DescriptorPrefix(m.Desc),
			GrpcWebPackage: grpcWebPackage,
		}
		if err := messageMapperTemplate.Execute(out, data); err != nil {
			log.Fatalf("messageTemplate.Execute failed: %s", err)
		}

		p.writeMessageMappers(m.Messages, out, currentPkg, grpcWebPackage)
		p.writeEnumMappers(m.Enums, out, currentPkg, grpcWebPackage)
	}
}

func (p *Runner) writeEnumMappers(enums []*protogen.Enum, out *protogen.GeneratedFile, currentPkg string, grpcWebPackage string) {
	for _, m := range enums {
		data := enumMapperMapperTemplateData{
			Enum:           m,
			Package:        currentPkg,
			Prefix:         mapping.DescriptorPrefix(m.Desc),
			GrpcWebPackage: grpcWebPackage,
		}
		if err := enumMapperMapperTemplate.Execute(out, data); err != nil {
			log.Fatalf("enumTemplate.Execute failed: %s", err)
		}
	}
}

func (p *Runner) generateMappers(plugin *protogen.Plugin) error {
	for _, f := range plugin.Files {
		// Create the output file
		outputDir := filepath.Dir(f.Desc.Path())

		fileName := strings.TrimSuffix(filepath.Base(f.Desc.Path()), filepath.Ext(f.Desc.Path()))
		grpcWebPackage := fileName + "_pb"
		outputFile := fileName + "_mappers_sjs.ts"
		outputPath := fmt.Sprintf("%s/%s", outputDir, outputFile)
		out := plugin.NewGeneratedFile(outputPath, "")

		_, _ = out.Write([]byte(`// File auto-generated by protoc-gen-simple-js
`))

		currentPackage := mapping.DescriptorPackage(f.Desc, "mappers")
		if err := p.generateMappersImports(f, out, outputPath, grpcWebPackage, currentPackage); err != nil {
			log.Fatalf("could not add required imports: %s", err)
		}
		p.writeMessageMappers(f.Messages, out, currentPackage, grpcWebPackage)
		p.writeEnumMappers(f.Enums, out, currentPackage, grpcWebPackage)

	}

	return nil
}

func (p *Runner) generateMappersImports(f *protogen.File, out *protogen.GeneratedFile, currentPath string, grpcWebPackage string, currentPackage string) error {
	// required is a list of required paths to import
	required := make([]*requiredImport, 0)
	addRequired := func(descriptor protoreflect.Descriptor) {
		var requiredFile protoreflect.FileDescriptor

		switch d := descriptor.(type) {
		case protoreflect.MessageDescriptor:
			requiredFile = p.messageFiles[d.FullName()]
		case protoreflect.EnumDescriptor:
			requiredFile = p.enumFiles[d.FullName()]
		default:
			log.Println("addRequiredImports: skipping unhandled descriptor type")
			return
		}

		for _, r := range required {
			if r.FileDesc == requiredFile {
				return
			}
		}

		r := &requiredImport{
			FileDesc:     requiredFile,
			ImportName:   mapping.PkgToImportPkg(mapping.DescriptorPackage(requiredFile, "types")),
			RelativePath: mapping.ProtoToSimpleJS(mapping.RelativePathBetweenPaths(currentPath, requiredFile.Path()), false, "_types"),
		}
		rMapper := &requiredImport{
			FileDesc:     requiredFile,
			ImportName:   mapping.PkgToImportPkg(mapping.DescriptorPackage(requiredFile, "mappers")),
			RelativePath: mapping.ProtoToSimpleJS(mapping.RelativePathBetweenPaths(currentPath, requiredFile.Path()), false, "_mappers"),
		}

		if r.RelativePath != "" {
			required = append(required, r)
		}
		if rMapper.RelativePath != "" {
			// log.Println(currentPath, currentPackage, rMapper.RelativePath, requiredFile.Path())
			required = append(required, rMapper)
		}
	}

	required = append(required, &requiredImport{
		ImportName:   grpcWebPackage,
		RelativePath: "./" + grpcWebPackage,
	})

	for _, m := range f.Messages {
		addRequired(m.Desc)
		for _, f := range m.Fields {
			switch f.Desc.Kind() {
			case protoreflect.MessageKind:
				addRequired(f.Desc.Message())
			case protoreflect.EnumKind:
				addRequired(f.Desc.Enum())
			default:
				continue
			}
		}
	}

	if err := importsTemplate.Execute(out, required); err != nil {
		return fmt.Errorf("could not execute imports template: %w", err)
	}

	return nil
}
