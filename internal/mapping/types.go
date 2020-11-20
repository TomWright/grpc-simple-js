package mapping

import (
	"fmt"
	"google.golang.org/protobuf/reflect/protoreflect"
	"strings"
)

func MessagePackage(m protoreflect.MessageDescriptor) string {
	return strings.TrimSuffix(string(m.FullName()), "."+string(m.Name()))
}

func EnumPackage(m protoreflect.EnumDescriptor) string {
	return strings.TrimSuffix(string(m.FullName()), "."+string(m.Name()))
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
