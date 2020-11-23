package internal

import (
	"fmt"
	"github.com/tomwright/grpc-simple-js/internal/mapping"
	"google.golang.org/protobuf/compiler/protogen"
	"text/template"
)

var defaultFuncMap = &funcMap{}

type funcMap struct {
}

func (fm *funcMap) toMap() template.FuncMap {
	return template.FuncMap{
		"messageName":   fm.messageName,
		"enumName":      fm.enumName,
		"fieldName":     fm.fieldName,
		"fieldType":     fm.fieldType,
		"enumValueName": fm.enumValueName,
		"enumValue":     fm.enumValue,
	}
}

func (fm *funcMap) messageName(message *protogen.Message) string {
	return string(message.Desc.Name())
}

func (fm *funcMap) enumName(enum *protogen.Enum) string {
	return string(enum.Desc.Name())
}

func (fm *funcMap) fieldName(field *protogen.Field) string {
	return string(field.Desc.Name())
}

func (fm *funcMap) fieldType(field *protogen.Field, pkg string) string {
	return mapping.FieldType(field, pkg)
}

func (fm *funcMap) enumValueName(value *protogen.EnumValue) string {
	return string(value.Desc.Name())
}

func (fm *funcMap) enumValue(value *protogen.EnumValue) string {
	return fmt.Sprint(value.Desc.Number())
}
