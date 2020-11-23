package internal

import (
	"fmt"
	"google.golang.org/protobuf/compiler/protogen"
	"google.golang.org/protobuf/reflect/protoreflect"
	"text/template"
)

func NewRunner() *Runner {
	return &Runner{}
}

type Runner struct {
	messageFiles map[protoreflect.FullName]protoreflect.FileDescriptor
	enumFiles    map[protoreflect.FullName]protoreflect.FileDescriptor
}

type requiredImport struct {
	FileDesc     protoreflect.FileDescriptor
	ImportName   string
	RelativePath string
}

var importsTemplate = template.Must(template.New("imports").
	Funcs(defaultFuncMap.toMap()).
	Parse(`{{ range . -}}
import * as {{ .ImportName }} from '{{ .RelativePath }}'
{{ end }}

`))

func (p *Runner) Run(plugin *protogen.Plugin) error {
	if err := p.discoverFiles(plugin); err != nil {
		return fmt.Errorf("could not discover files: %w", err)
	}
	if err := p.generateTypes(plugin); err != nil {
		return fmt.Errorf("could not generate types: %w", err)
	}
	if err := p.generateMappers(plugin); err != nil {
		return fmt.Errorf("could not generate types: %w", err)
	}
	return nil
}

func (p *Runner) discoverMessage(fileDesc protoreflect.FileDescriptor, current *protogen.Message) error {
	p.messageFiles[current.Desc.FullName()] = fileDesc

	for _, m := range current.Messages {
		if err := p.discoverMessage(fileDesc, m); err != nil {
			return err
		}
	}
	for _, m := range current.Enums {
		if err := p.discoverEnum(fileDesc, m); err != nil {
			return err
		}
	}
	return nil
}

func (p *Runner) discoverEnum(fileDesc protoreflect.FileDescriptor, current *protogen.Enum) error {
	p.enumFiles[current.Desc.FullName()] = fileDesc
	return nil
}

func (p *Runner) discoverFiles(plugin *protogen.Plugin) error {
	p.messageFiles = map[protoreflect.FullName]protoreflect.FileDescriptor{}
	p.enumFiles = map[protoreflect.FullName]protoreflect.FileDescriptor{}
	for _, f := range plugin.Files {
		for _, m := range f.Messages {
			if err := p.discoverMessage(f.Desc, m); err != nil {
				return err
			}
		}
		for _, m := range f.Enums {
			if err := p.discoverEnum(f.Desc, m); err != nil {
				return err
			}
		}
	}
	return nil
}
