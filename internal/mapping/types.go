package mapping

import (
	"fmt"
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

// MessagePackage returns the package of the given message.
// E.g. platform.v1.query.MatchedStringValue returns platform.v1.query
func MessagePackage(m protoreflect.MessageDescriptor) string {
	return DescriptorPackage(m)
}

// EnumPackage returns the package of the given enum.
// E.g. ui.crud.v1.Resource.Datasource returns ui.crud.v1
func EnumPackage(m protoreflect.EnumDescriptor) string {
	return DescriptorPackage(m)
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
