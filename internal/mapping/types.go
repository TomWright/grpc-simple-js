package mapping

import (
	"fmt"
	"google.golang.org/protobuf/compiler/protogen"
	"google.golang.org/protobuf/reflect/protoreflect"
	"strings"
)

func PkgToImportPkg(pkg string) string {
	return strings.Replace(pkg, ".", "_", -1)
}

// DescriptorPackage returns the package of the given descriptor.
// E.g. platform.v1.query.MatchedStringValue returns platform.v1.query
func DescriptorPackage(m protoreflect.Descriptor) string {
	parent := m.ParentFile()
	if parent == nil {
		return string(m.FullName())
	}
	return string(parent.FullName())
}

func FieldType(field *protogen.Field) string {
	var result string
	switch field.Desc.Kind() {
	case protoreflect.MessageKind:
		message := field.Desc.Message()
		result = fmt.Sprintf("%s.%s", PkgToImportPkg(DescriptorPackage(message)), string(message.Name()))
	case protoreflect.EnumKind:
		enum := field.Desc.Enum()
		result = fmt.Sprintf("%s.%s", PkgToImportPkg(DescriptorPackage(enum)), string(enum.Name()))
	default:
		result = MapKindToString(field.Desc.Kind())
	}

	if field.Desc.Cardinality() == protoreflect.Repeated {
		result = fmt.Sprintf("Array<%s>", result)
	}

	return result
}

func MapKindToString(k protoreflect.Kind) string {
	switch k {
	case protoreflect.BoolKind:
		return "boolean"
	case protoreflect.EnumKind:
		return "enum"
	case protoreflect.Int32Kind, protoreflect.Sint32Kind, protoreflect.Uint32Kind,
		protoreflect.Int64Kind, protoreflect.Sint64Kind, protoreflect.Uint64Kind,
		protoreflect.Sfixed32Kind, protoreflect.Fixed32Kind, protoreflect.FloatKind,
		protoreflect.Sfixed64Kind, protoreflect.Fixed64Kind, protoreflect.DoubleKind:
		return "number"
	case protoreflect.StringKind:
		return "string"
	case protoreflect.BytesKind:
		return "bytes"
	case protoreflect.MessageKind:
		return "message"
	case protoreflect.GroupKind:
		return "group"
	default:
		return fmt.Sprintf("<unknown:%d>", k)
	}
}
