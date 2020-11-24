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
		"messageName":                         fm.messageName,
		"messageType":                         fm.messageType,
		"enumName":                            fm.enumName,
		"enumNameWithPrefix":                  fm.enumNameWithPrefix,
		"enumType":                            fm.enumType,
		"enumTypeWithPrefix":                  fm.enumTypeWithPrefix,
		"fieldName":                           fm.fieldName,
		"fieldType":                           fm.fieldType,
		"enumValueName":                       fm.enumValueName,
		"enumValue":                           fm.enumValue,
		"mapperToGrpcWebAssignMessageField":   fm.mapperToGrpcWebAssignMessageField,
		"mapperFromGrpcWebAssignMessageField": fm.mapperFromGrpcWebAssignMessageField,
		"mapperFromGrpcWebAssignMessageFieldSecondary": fm.mapperFromGrpcWebAssignMessageFieldSecondary,
		"mapperToGrpcWebEnumValueCase":                 fm.mapperToGrpcWebEnumValueCase,
		"mapperFromGrpcWebEnumValueCase":               fm.mapperFromGrpcWebEnumValueCase,
		"descriptorGrpcWebPrefix":                      fm.descriptorGrpcWebPrefix,
		"descriptorPrefix":                             fm.descriptorPrefix,
		"indent":                                       fm.indent,
	}
}

func (fm *funcMap) indent(num int, in string) string {
	if strings.TrimSpace(in) == "" {
		return ""
	}
	return strings.Repeat(" ", num) + in
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
	if field.Desc.IsMap() {
		name += "Map"
	} else if field.Desc.Cardinality() == protoreflect.Repeated {
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
	addName := "add" + strings.Title(strings.ToLower(string(f.Desc.Name())))
	tmpFieldName := "tmp" + strings.Title(fieldName)

	newValue := fmt.Sprintf("input.%s", fieldName)
	wrapCheckValue := fmt.Sprintf("input?.%s", fieldName)

	switch f.Desc.Kind() {
	case protoreflect.MessageKind:
		mapperPkg := mapping.FieldTypeDescriptorPackage(f.Desc, "mappers")
		if mapperPkg != "" && mapperPkg != pkg {
			// log.Println(mapperPkg, pkg)
			mapperPkg = mapping.PkgToImportPkg(mapperPkg) + "."
		} else {
			mapperPkg = ""
		}
		typePkg := mapping.FieldTypeDescriptorPackage(f.Desc, "types")
		if typePkg != "" && typePkg != pkg {
			// log.Println(typePkg, pkg)
			typePkg = mapping.PkgToImportPkg(typePkg) + "."
		} else {
			typePkg = ""
		}

		if f.Desc.IsMap() {
			mapGetter := fmt.Sprintf("get%sMap", strings.Title(fieldName))
			res := fmt.Sprintf("input.%s.forEach(x => { result.%s().set(x.key, %smap%sToGrpcWeb(x.value)) })", fieldName, mapGetter, mapperPkg, mapping.FieldDescriptorTypePlain(f.Desc.MapValue(), pkg))
			return fmt.Sprintf("if (%s !== undefined) %s", wrapCheckValue, res)
		} else if f.Desc.Cardinality() == protoreflect.Repeated {
			fieldTypePlain := mapping.FieldTypePlain(f, pkg)

			return fmt.Sprintf(`if (input?.%s !== undefined) {
		input.%s.forEach((x: %s%s, i: number) => {
			result.%s(%smap%sToGrpcWeb(x), i)
		})
    }`, fieldName, fieldName, typePkg, fieldTypePlain, addName, mapperPkg, fieldTypePlain)
		} else {
			newValue = fmt.Sprintf("%smap%sToGrpcWeb(input?.%s)", mapperPkg, mapping.FieldTypePlain(f, pkg), fieldName)
			return fmt.Sprintf("const %s = %s;\n    if (%s !== undefined) result.%s(%s)", tmpFieldName, newValue, tmpFieldName, setterName, tmpFieldName)
		}
	case protoreflect.EnumKind:
		newValue = fmt.Sprintf("map%sToGrpcWeb(input?.%s)", mapping.FieldTypePlain(f, pkg), fieldName)
		return fmt.Sprintf("const %s = %s;\n    if (%s !== undefined) result.%s(%s)", tmpFieldName, newValue, tmpFieldName, setterName, tmpFieldName)
	}

	return fmt.Sprintf("if (%s !== undefined) result.%s(%s)", wrapCheckValue, setterName, newValue)
}

func (fm *funcMap) mapperFromGrpcWebAssignMessageField(f *protogen.Field, pkg string, grpcWebPackage string) string {
	fieldName := fm.fieldName(f)
	grpcWebFieldName := fm.grpcWebFieldName(f)

	getterName := "get" + strings.Title(grpcWebFieldName)

	mapperPkg := mapping.FieldTypeDescriptorPackage(f.Desc, "mappers")
	if mapperPkg != "" && mapperPkg != pkg {
		mapperPkg = mapping.PkgToImportPkg(mapperPkg) + "."
	} else {
		mapperPkg = ""
	}
	typePkg := mapping.FieldTypeDescriptorPackage(f.Desc, "types")
	if typePkg != "" && typePkg != pkg {
		typePkg = mapping.PkgToImportPkg(typePkg) + "."
	} else {
		typePkg = ""
	}

	if f.Desc.IsMap() {
		return fmt.Sprintf("%s: [],", fieldName)
	}

	var newValue string
	switch f.Desc.Kind() {
	case protoreflect.MessageKind, protoreflect.EnumKind:
		if f.Desc.Cardinality() == protoreflect.Repeated {
			return ""
		} else {
			newValue = fmt.Sprintf("%smap%sFromGrpcWeb(input.%s())", mapperPkg, mapping.FieldTypePlain(f, pkg), getterName)
		}
	default:
		newValue = fmt.Sprintf("input.%s()", getterName)
	}

	return fmt.Sprintf("%s: %s,", fieldName, newValue)
}

func (fm *funcMap) mapperFromGrpcWebAssignMessageFieldSecondary(f *protogen.Field, pkg string, grpcWebPackage string) string {
	fieldName := fm.fieldName(f)
	grpcWebFieldName := fm.grpcWebFieldName(f)

	getterName := "get" + strings.Title(grpcWebFieldName)
	tmpListName := fieldName + "List"

	mapperPkg := mapping.FieldTypeDescriptorPackage(f.Desc, "mappers")
	if mapperPkg != "" && mapperPkg != pkg {
		mapperPkg = mapping.PkgToImportPkg(mapperPkg) + "."
	} else {
		mapperPkg = ""
	}
	typePkg := mapping.FieldTypeDescriptorPackage(f.Desc, "types")
	if typePkg != "" && typePkg != pkg {
		typePkg = mapping.PkgToImportPkg(typePkg) + "."
	} else {
		typePkg = ""
	}

	if !f.Desc.IsMap() {
		switch f.Desc.Kind() {
		case protoreflect.MessageKind, protoreflect.EnumKind:
			if f.Desc.Cardinality() != protoreflect.Repeated {
				return ""
			}

			fieldTypePlain := mapping.FieldTypePlain(f, pkg)

			return fmt.Sprintf(`const %s: Array<%s%s> = []
	input.%s().forEach((x: any) => {
		const val = %smap%sFromGrpcWeb(x)
		if (val !== undefined) %s.push(val)
	})
	result.%s = %s`, tmpListName, typePkg, fieldTypePlain, getterName, mapperPkg, fieldTypePlain, tmpListName, fieldName, tmpListName)
		default:
			return ""
		}
	}

	return fmt.Sprintf("input.%s().forEach((_:any, k: string) => { result.%s!.push({key: k, value: %smap%sFromGrpcWeb(input.%s().get(k))}) })", getterName, fieldName, mapperPkg, mapping.FieldDescriptorTypePlain(f.Desc.MapValue(), pkg), getterName)
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

func (fm *funcMap) mapperFromGrpcWebEnumValueCase(f *protogen.EnumValue, pkg string, grpcWebPackage string) string {
	return fmt.Sprintf("case %s.%s.%s: return %s.%s.%s",
		grpcWebPackage,
		mapping.DescriptorGrpcWebPrefix(f.Parent.Desc)+string(f.Parent.Desc.Name()),
		f.Desc.Name(),
		mapping.PkgToImportPkg(mapping.DescriptorPackage(f.Desc, "types")),
		mapping.DescriptorPrefix(f.Parent.Desc)+string(f.Parent.Desc.Name()),
		f.Desc.Name())
}

func (fm *funcMap) descriptorPrefix(f protoreflect.Descriptor) string {
	return mapping.DescriptorPrefix(f)
}

func (fm *funcMap) descriptorGrpcWebPrefix(f protoreflect.Descriptor) string {
	return mapping.DescriptorGrpcWebPrefix(f)
}
