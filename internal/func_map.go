package internal

import (
	"github.com/tomwright/grpc-simple-js/internal/mapping"
	"google.golang.org/protobuf/compiler/protogen"
	"text/template"
)

var defaultFuncMap = &funcMap{}

type funcMap struct {
}

func (fm *funcMap) toMap() template.FuncMap {
	return template.FuncMap{
		"messageName": fm.messageName,
		"fieldName":   fm.fieldName,
		"fieldType":   fm.fieldType,
	}
}

func (fm *funcMap) messageName(message *protogen.Message) string {
	return string(message.Desc.Name())
}

func (fm *funcMap) fieldName(field *protogen.Field) string {
	return string(field.Desc.Name())
}

func (fm *funcMap) fieldType(field *protogen.Field) string {
	return mapping.FieldType(field)
}
