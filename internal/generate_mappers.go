package internal

import (
	"context"
	"fmt"
	"github.com/tomwright/grpc-simple-ts/internal/mapping"
	"github.com/tomwright/grpc-simple-ts/internal/mappingcontext"
	"google.golang.org/protobuf/compiler/protogen"
	"google.golang.org/protobuf/reflect/protoreflect"
	"log"
	"text/template"
)

type messageMapperToGrpcWebTemplateData struct {
	Context context.Context
	Message        *protogen.Message
	Package        string
	Prefix         string
	GrpcWebPackage string
}

var messageMapperToGrpcWebTemplate = template.Must(template.New("messageMapperToGrpcWeb").
	Funcs(defaultFuncMap.toMap()).
	Parse(`
{{- $ctx := .Context -}}
export const {{ messageToGrpcWebMapperName $ctx .Message }} = (input?: {{ messageTypeNew $ctx .Message }}): {{ grpcMessageType $ctx .Message }} | undefined => {
	if (!input) return
	const result = new {{ grpcMessageType $ctx .Message }}()
{{- range .Message.Fields }}
	{{ mapperToGrpcWebAssignMessageField $ctx . }}
{{- end }}
	return result
}

`))

type messageMapperFromGrpcWebTemplateData struct {
	Context context.Context
	Message        *protogen.Message
	Package        string
	Prefix         string
	GrpcWebPackage string
}

var messageMapperFromGrpcWebTemplate = template.Must(template.New("messageMapperFromGrpcWeb").
	Funcs(defaultFuncMap.toMap()).
	Parse(`
{{- $package := .Package -}}
{{- $grpcWebPackage := .GrpcWebPackage -}}
export const map{{ messageName .Message }}FromGrpcWeb = (input?: {{ $grpcWebPackage }}.{{ messageName .Message }}): {{ messageType .Message }} | undefined => {
	if (!input) return
	const result: {{ messageType .Message }} = {
{{- range .Message.Fields }}
{{ mapperFromGrpcWebAssignMessageField . $package $grpcWebPackage | indent 8 }}
{{- end }}
	}
{{- range .Message.Fields }}
{{- with mapperFromGrpcWebAssignMessageFieldSecondary . $package $grpcWebPackage -}}
{{- if ne . "" }}
{{ indent 4 . }}
{{ end -}}
{{- end -}}
{{- end }}
	return result
}

`))

type enumMapperMapperToGrpcWebTemplateData struct {
	Context context.Context
	Enum           *protogen.Enum
	Package        string
	Prefix         string
	GrpcWebPackage string
}

var enumMapperMapperToGrpcWebTemplate = template.Must(template.New("enumMapperToGrpcWeb").
	Funcs(defaultFuncMap.toMap()).
	Parse(`
{{- $package := .Package -}}
{{- $grpcWebPackage := .GrpcWebPackage -}}
export const map{{ enumNameWithPrefix .Enum }}ToGrpcWeb = (input?: {{ enumTypeWithPrefix .Enum }}): {{ $grpcWebPackage }}.{{ descriptorGrpcWebPrefix .Enum.Desc }}{{ enumName .Enum }} | undefined => {
	if (input === undefined) return
	switch (input) {
{{- range .Enum.Values }}
		{{ mapperToGrpcWebEnumValueCase . $package $grpcWebPackage }}
{{- end }}
	}
}

`))

type enumMapperMapperFromGrpcWebTemplateData struct {
	Context context.Context
	Enum           *protogen.Enum
	Package        string
	Prefix         string
	GrpcWebPackage string
}

var enumMapperMapperFromGrpcWebTemplate = template.Must(template.New("enumMapperFromGrpcWeb").
	Funcs(defaultFuncMap.toMap()).
	Parse(`
{{- $package := .Package -}}
{{- $grpcWebPackage := .GrpcWebPackage -}}
export const map{{ enumNameWithPrefix .Enum }}FromGrpcWeb = (input?: {{ $grpcWebPackage }}.{{ descriptorGrpcWebPrefix .Enum.Desc }}{{ enumName .Enum }}): {{ enumTypeWithPrefix .Enum }} | undefined => {
	if (input === undefined) return
	switch (input) {
{{- range .Enum.Values }}
		{{ mapperFromGrpcWebEnumValueCase . $package $grpcWebPackage }}
{{- end }}
	}
}

`))

func (p *Runner) writeMessageMappers(ctx context.Context, messages []*protogen.Message) {
	grpcWebPackage := mapping.GRPCWebPackage(ctx)
	out := mappingcontext.CurrentGeneratedFileFromContext(ctx)
	currentPkg := mapping.CurrentPackage(ctx)

	for _, m := range messages {
		dataTo := messageMapperToGrpcWebTemplateData{
			Context: ctx,
			Message:        m,
			Package:        currentPkg,
			Prefix:         mapping.DescriptorPrefix(m.Desc),
			GrpcWebPackage: grpcWebPackage,
		}
		dataFrom := messageMapperFromGrpcWebTemplateData{
			Context: ctx,
			Message:        m,
			Package:        currentPkg,
			Prefix:         mapping.DescriptorPrefix(m.Desc),
			GrpcWebPackage: grpcWebPackage,
		}
		if !m.Desc.IsMapEntry() {
			if err := messageMapperToGrpcWebTemplate.Execute(out, dataTo); err != nil {
				log.Fatalf("messageMapperToGrpcWebTemplate.Execute failed: %s", err)
			}
			if err := messageMapperFromGrpcWebTemplate.Execute(out, dataFrom); err != nil {
				log.Fatalf("messageMapperFromGrpcWebTemplate.Execute failed: %s", err)
			}
		}

		p.writeMessageMappers(ctx, m.Messages)
		p.writeEnumMappers(ctx, m.Enums)
	}
}

func (p *Runner) writeEnumMappers(ctx context.Context, enums []*protogen.Enum) {
	grpcWebPackage := mapping.GRPCWebPackage(ctx)
	out := mappingcontext.CurrentGeneratedFileFromContext(ctx)
	currentPkg := mapping.CurrentPackage(ctx)

	for _, m := range enums {
		dataTo := enumMapperMapperToGrpcWebTemplateData{
			Context: ctx,
			Enum:           m,
			Package:        currentPkg,
			Prefix:         mapping.DescriptorPrefix(m.Desc),
			GrpcWebPackage: grpcWebPackage,
		}
		dataFrom := enumMapperMapperFromGrpcWebTemplateData{
			Context: ctx,
			Enum:           m,
			Package:        currentPkg,
			Prefix:         mapping.DescriptorPrefix(m.Desc),
			GrpcWebPackage: grpcWebPackage,
		}
		if err := enumMapperMapperToGrpcWebTemplate.Execute(out, dataTo); err != nil {
			log.Fatalf("enumMapperMapperToGrpcWebTemplate.Execute failed: %s", err)
		}
		if err := enumMapperMapperFromGrpcWebTemplate.Execute(out, dataFrom); err != nil {
			log.Fatalf("enumMapperMapperFromGrpcWebTemplate.Execute failed: %s", err)
		}
	}
}

func (p *Runner) generateMappers(plugin *protogen.Plugin) error {
	ctx := context.Background()

	for _, f := range plugin.Files {
		ctx := mappingcontext.ContextWithCurrentFile(ctx, f)
		ctx = mappingcontext.ContextWithCurrentFileExtension(ctx, "_mappers_sjs.ts")
		ctx = mappingcontext.ContextWithCurrentPackage(ctx, "mappers")

		out := plugin.NewGeneratedFile(mapping.OutputFilepath(ctx), "")
		ctx = mappingcontext.ContextWithCurrentGeneratedFile(ctx, out)

		_, _ = out.Write([]byte(`// File auto-generated by protoc-gen-simple-ts
`))

		if err := p.generateMappersImports(ctx); err != nil {
			log.Fatalf("could not add required imports: %s", err)
		}
		p.writeMessageMappers(ctx, f.Messages)
		p.writeEnumMappers(ctx, f.Enums)

	}

	return nil
}

func (p *Runner) generateMappersImports(ctx context.Context) error {
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

		currentPath := mapping.OutputFilepath(ctx)

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
			required = append(required, rMapper)
		}
	}

	grpcWebPackage := mapping.GRPCWebPackage(ctx)

	required = append(required, &requiredImport{
		ImportName:   grpcWebPackage,
		RelativePath: "./" + grpcWebPackage,
	})

	for _, m := range mappingcontext.CurrentFileFromContext(ctx).Messages {
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

	if err := importsTemplate.Execute(mappingcontext.CurrentGeneratedFileFromContext(ctx), required); err != nil {
		return fmt.Errorf("could not execute imports template: %w", err)
	}

	return nil
}
