package internal

import (
	"fmt"
	"github.com/tomwright/grpc-simple-js/internal/mapping"
	"google.golang.org/protobuf/compiler/protogen"
	"google.golang.org/protobuf/reflect/protoreflect"
	"strings"
	"text/template"
)

var defaultFuncMap = &funcMap{}

type funcMap struct {
}

func (fm *funcMap) toMap() template.FuncMap {
	return template.FuncMap{
		"messageName":                       fm.messageName,
		"messageType":                       fm.messageType,
		"enumName":                          fm.enumName,
		"enumNameWithPrefix":                fm.enumNameWithPrefix,
		"enumType":                          fm.enumType,
		"enumTypeWithPrefix":                fm.enumTypeWithPrefix,
		"fieldName":                         fm.fieldName,
		"fieldType":                         fm.fieldType,
		"enumValueName":                     fm.enumValueName,
		"enumValue":                         fm.enumValue,
		"mapperToGrpcWebAssignMessageField": fm.mapperToGrpcWebAssignMessageField,
		"mapperToGrpcWebEnumValueCase":      fm.mapperToGrpcWebEnumValueCase,
		"descriptorGrpcWebPrefix":           fm.descriptorGrpcWebPrefix,
		"descriptorPrefix":                  fm.descriptorPrefix,
	}
}

func (fm *funcMap) messageName(message *protogen.Message) string {
	return string(message.Desc.Name())
}

func (fm *funcMap) messageType(message *protogen.Message) string {
	return fmt.Sprintf("%s.%s", mapping.PkgToImportPkg(mapping.DescriptorPackage(message.Desc, "types")), string(message.Desc.Name()))
}

func (fm *funcMap) enumName(enum *protogen.Enum) string {
	return string(enum.Desc.Name())
}

func (fm *funcMap) enumNameWithPrefix(enum *protogen.Enum) string {
	return mapping.DescriptorPrefix(enum.Desc) + string(enum.Desc.Name())
}

func (fm *funcMap) enumType(enum *protogen.Enum) string {
	return fmt.Sprintf("%s.%s", mapping.PkgToImportPkg(mapping.DescriptorPackage(enum.Desc, "types")), string(enum.Desc.Name()))
}

func (fm *funcMap) enumTypeWithPrefix(enum *protogen.Enum) string {
	return fmt.Sprintf("%s.%s%s", mapping.PkgToImportPkg(mapping.DescriptorPackage(enum.Desc, "types")), mapping.DescriptorPrefix(enum.Desc), string(enum.Desc.Name()))
}

func (fm *funcMap) fieldName(field *protogen.Field) string {
	return string(field.Desc.Name())
}

func (fm *funcMap) fieldNameWithPrefix(field *protogen.Field) string {
	return mapping.DescriptorPrefix(field.Desc) + string(field.Desc.Name())
}

func (fm *funcMap) grpcWebFieldName(field *protogen.Field) string {
	name := strings.ToLower(string(field.Desc.Name()))
	if field.Desc.Cardinality() == protoreflect.Repeated {
		name += "List"
	}
	return name
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

func (fm *funcMap) mapperToGrpcWebAssignMessageField(f *protogen.Field, pkg string, grpcWebPackage string) string {
	fieldName := fm.fieldName(f)
	grpcWebFieldName := fm.grpcWebFieldName(f)

	setterName := "set" + strings.Title(grpcWebFieldName)

	newValue := fmt.Sprintf("input.%s", fieldName)

	switch f.Desc.Kind() {
	case protoreflect.MessageKind:

		mapperPkg := mapping.FieldTypeDescriptorPackage(f.Desc, "mappers")
		if mapperPkg != "" && mapperPkg != pkg {
			// log.Println(mapperPkg, pkg)
			mapperPkg = mapping.PkgToImportPkg(mapperPkg) + "."
		} else {
			mapperPkg = ""
		}

		if f.Desc.IsMap() {
			mapName := fmt.Sprintf("%sMap", fieldName)
			mapGetter := fmt.Sprintf("get%sMap", strings.Title(fieldName))
			return fmt.Sprintf("const %s = result.%s();\n    input.%s.forEach(x => { %s.put(x.key, %smap%sToGrpcWeb(x.value)) })", mapName, mapGetter, fieldName, mapName, mapperPkg, mapping.FieldDescriptorTypePlain(f.Desc.MapValue(), pkg))
		} else if f.Desc.Cardinality() == protoreflect.Repeated {
			newValue = fmt.Sprintf("input.%s.map(x => %smap%sToGrpcWeb(x))", fieldName, mapperPkg, mapping.FieldTypePlain(f, pkg))
		} else {
			newValue = fmt.Sprintf("%smap%sToGrpcWeb(input.%s)", mapperPkg, mapping.FieldTypePlain(f, pkg), fieldName)
		}
	case protoreflect.EnumKind:
		newValue = fmt.Sprintf("map%sToGrpcWeb(input.%s)", mapping.FieldTypePlain(f, pkg), fieldName)
	}

	return fmt.Sprintf("result.%s(%s)", setterName, newValue)
}

func (fm *funcMap) mapperToGrpcWebEnumValueCase(f *protogen.EnumValue, pkg string, grpcWebPackage string) string {
	return fmt.Sprintf("case %s.%s.%s: return %s.%s.%s",
		mapping.PkgToImportPkg(mapping.DescriptorPackage(f.Desc, "types")),
		mapping.DescriptorPrefix(f.Parent.Desc)+string(f.Parent.Desc.Name()),
		f.Desc.Name(),
		grpcWebPackage,
		mapping.DescriptorGrpcWebPrefix(f.Parent.Desc)+string(f.Parent.Desc.Name()),
		f.Desc.Name())
}

func (fm *funcMap) descriptorPrefix(f protoreflect.Descriptor) string {
	return mapping.DescriptorPrefix(f)
}

func (fm *funcMap) descriptorGrpcWebPrefix(f protoreflect.Descriptor) string {
	return mapping.DescriptorGrpcWebPrefix(f)
}
