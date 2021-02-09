package mapping

import (
	"context"
	"fmt"
	"github.com/tomwright/grpc-simple-ts/internal/mappingcontext"
	"google.golang.org/protobuf/compiler/protogen"
	"google.golang.org/protobuf/reflect/protoreflect"
	"path/filepath"
	"strings"
)

// GRPCWebPackage returns the current grpc web package.
func GRPCWebPackage(ctx context.Context) string {
	path := mappingcontext.CurrentFileFromContext(ctx).Desc.Path()
	fileName := strings.TrimSuffix(filepath.Base(path), filepath.Ext(path))
	return fileName + "_pb"
}

// OutputDir returns the current output directory.
func OutputDir(ctx context.Context) string {
	return filepath.Dir(mappingcontext.CurrentFileFromContext(ctx).Desc.Path())
}

// OutputFilename returns the current output filename.
func OutputFilename(ctx context.Context) string {
	path := mappingcontext.CurrentFileFromContext(ctx).Desc.Path()
	fileName := strings.TrimSuffix(filepath.Base(path), filepath.Ext(path))
	return fileName + mappingcontext.CurrentFileExtensionFromContext(ctx)
}

// OutputFilepath returns the current output file path.
func OutputFilepath(ctx context.Context) string {
	return fmt.Sprintf("%s/%s", OutputDir(ctx), OutputFilename(ctx))
}

// CurrentPackage returns the current package.
func CurrentPackage(ctx context.Context) string {
	return DescriptorPackage(mappingcontext.CurrentFileFromContext(ctx).Desc, mappingcontext.CurrentPackageFromContext(ctx))
}

// MessagePackage returns the package of the given message.
func MessagePackage(ctx context.Context, message *protogen.Message) string {
	return DescriptorPackage(message.Desc, "types")
}

// FieldMapperPackage returns the mapper package of the given message.
func FieldMapperPackage(ctx context.Context, message *protogen.Message) string {
	return DescriptorPackage(message.Desc, "mappers")
}

// MessageType returns the type of the given message.
// If we are not in the same file as the message the returned string will include the import name as required.
func MessageType(ctx context.Context, message *protogen.Message) string {
	currentPackage := CurrentPackage(ctx)
	pkg := MessagePackage(ctx, message)
	if pkg == currentPackage {
		pkg = ""
	} else {
		pkg = PkgToImportPkg(pkg)
	}

	return fmt.Sprintf("%s.%s", pkg, message.Desc.Name())
}

func FieldName(ctx context.Context, field *protogen.Field) string {
	return string(field.Desc.Name())
}

func GRPCFieldName(ctx context.Context, field *protogen.Field) string {
	return strings.ToLower(string(field.Desc.Name()))
}

func GRPCFormattedFieldName(ctx context.Context, field *protogen.Field) string {
	name := GRPCFieldName(ctx, field)
	if field.Desc.IsMap() {
		name += "Map"
	} else if field.Desc.Cardinality() == protoreflect.Repeated {
		name += "List"
	}
	return name
}

func GRPCSetterName(ctx context.Context, field *protogen.Field) string {
	return fmt.Sprintf("set%s", strings.Title(GRPCFormattedFieldName(ctx, field)))
}

func GRPCSetterAddName(ctx context.Context, field *protogen.Field) string {
	return fmt.Sprintf("add%s", strings.Title(GRPCFieldName(ctx, field)))
}