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

// DescriptorPrefix returns the prefix for the descriptor.
// This is required for nested types.
func DescriptorPrefix(desc protoreflect.Descriptor) string {
	prefix := ""
	cur := desc
loop:
	for {
		p := cur.Parent()
		switch p.(type) {
		case nil, protoreflect.FileDescriptor:
			break loop
		default:
			prefix = string(p.Name()) + "_" + prefix
		}
		cur = p
	}
	return prefix
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

func formatFieldType(pkg string, currentPkg string, descriptor protoreflect.Descriptor) string {
	name := DescriptorPrefix(descriptor) + string(descriptor.Name())
	if pkg != currentPkg {
		name = PkgToImportPkg(pkg) + "." + name
	}
	return name
}

func FieldDescriptorType(field protoreflect.FieldDescriptor, pkg string) string {
	var result string
	switch field.Kind() {
	case protoreflect.MessageKind:
		message := field.Message()
		result = formatFieldType(DescriptorPackage(message), pkg, message)
	case protoreflect.EnumKind:
		enum := field.Enum()
		result = formatFieldType(DescriptorPackage(enum), pkg, enum)
	default:
		result = MapKindToString(field.Kind())
	}

	if field.Cardinality() == protoreflect.Repeated {
		result = fmt.Sprintf("Array<%s>", result)
	}

	return result
}

func FieldType(field *protogen.Field, pkg string) string {
	return FieldDescriptorType(field.Desc, pkg)
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
