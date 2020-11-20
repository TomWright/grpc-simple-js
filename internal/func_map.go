package internal

import (
	"fmt"
	"github.com/tomwright/grpc-simple-js/internal/mapping"
	"google.golang.org/protobuf/compiler/protogen"
	"google.golang.org/protobuf/reflect/protoreflect"
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
	var result string
	switch field.Desc.Kind() {
	case protoreflect.MessageKind:
		message := field.Desc.Message()
		result = string(message.Name())
	case protoreflect.EnumKind:
		enum := field.Desc.Enum()
		result = string(enum.Name())
	default:
		result = mapping.MapKindToString(field.Desc.Kind())
	}

	if field.Desc.Cardinality() == protoreflect.Repeated {
		result = fmt.Sprintf("Array<%s>", result)
	}

	return result
}
