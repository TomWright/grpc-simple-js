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

type Runner struct {
}

var messageTemplate = template.Must(template.New("message").
	Funcs(defaultFuncMap.toMap()).
	Parse(`export type {{ messageName . }} = {
{{- range  .Fields }}
    {{ fieldName . }}: {{ fieldType . }},
{{- end }}
}

`))

var importsTemplate = template.Must(template.New("imports").
	Funcs(defaultFuncMap.toMap()).
	Parse(`{{ range $pkg, $imports := . }}
import {
{{- range $imports }}
    {{ . }},
{{- end }}
} from '{{ $pkg }}'
{{ end }}

`))

func (p *Runner) Run(plugin *protogen.Plugin) error {
	for _, f := range plugin.Files {
		// Create the output file
		outputDir := filepath.Dir(f.Desc.Path())
		outputFile := strings.TrimSuffix(filepath.Base(f.Desc.Path()), filepath.Ext(f.Desc.Path())) + ".ts"
		outputPath := fmt.Sprintf("%s/%s", outputDir, outputFile)
		out := plugin.NewGeneratedFile(outputPath, "")

		if err := p.addRequiredImports(f, out); err != nil {
			log.Fatalf("could not add required imports: %s", err)
		}

		// Write message types to output file
		for _, m := range f.Messages {
			if err := messageTemplate.Execute(out, m); err != nil {
				log.Fatalf("messageTemplate.Execute failed: %s", err)
			}
			// log.Println("----- MESSAGE START -----")
			// log.Println(m.Desc.Name())
			// out.Write([]byte(fmt.Sprintf("export type %s = {\n%s\n}")))
			// log.Println("----- MESSAGE END -----")
		}
	}

	return nil
}

func (p *Runner) addRequiredImports(f *protogen.File, out *protogen.GeneratedFile) error {
	currentPackage := string(f.Desc.Package())

	// required is a map where the key is the package and the value is list of required types
	required := make(map[string][]string, 0)
	addRequired := func(pkg string, name string) {
		// todo : format name so as it has the correct import path

		if _, ok := required[pkg]; !ok {
			required[pkg] = make([]string, 0)
		}
		for _, n := range required[pkg] {
			if n == name {
				return
			}
		}
		required[pkg] = append(required[pkg], name)
	}

	for _, m := range f.Messages {
		for _, f := range m.Fields {
			var pkg, name string
			switch f.Desc.Kind() {
			case protoreflect.MessageKind:
				message := f.Desc.Message()
				pkg = mapping.MessagePackage(message)
				name = string(message.Name())
			case protoreflect.EnumKind:
				enum := f.Desc.Enum()
				pkg = mapping.EnumPackage(enum)
				name = string(enum.Name())
			default:
				continue
			}
			if pkg == currentPackage {
				continue
			}
			addRequired(pkg, name)
		}
	}

	if err := importsTemplate.Execute(out, required); err != nil {
		return fmt.Errorf("could not execute imports template: %w", err)
	}

	return nil
}
