package mappingcontext

import (
	"context"
	"google.golang.org/protobuf/compiler/protogen"
)

type ctxKey string

const (
	ctxKeyCurrentFile          ctxKey = "currentFile"
	ctxKeyCurrentGeneratedFile ctxKey = "currentGeneratedFile"
	ctxKeyCurrentFileExtension ctxKey = "currentFileExtension"
	ctxKeyCurrentPackage       ctxKey = "currentPackage"
)

func CurrentFileFromContext(ctx context.Context) *protogen.File {
	if val, ok := ctx.Value(ctxKeyCurrentFile).(*protogen.File); ok {
		return val
	}
	return nil
}

func ContextWithCurrentFile(ctx context.Context, file *protogen.File) context.Context {
	return context.WithValue(ctx, ctxKeyCurrentFile, file)
}

func CurrentGeneratedFileFromContext(ctx context.Context) *protogen.GeneratedFile {
	if val, ok := ctx.Value(ctxKeyCurrentGeneratedFile).(*protogen.GeneratedFile); ok {
		return val
	}
	return nil
}

func ContextWithCurrentGeneratedFile(ctx context.Context, file *protogen.GeneratedFile) context.Context {
	return context.WithValue(ctx, ctxKeyCurrentGeneratedFile, file)
}

func CurrentFileExtensionFromContext(ctx context.Context) string {
	if val, ok := ctx.Value(ctxKeyCurrentFileExtension).(string); ok {
		return val
	}
	return ""
}

func ContextWithCurrentFileExtension(ctx context.Context, file string) context.Context {
	return context.WithValue(ctx, ctxKeyCurrentFileExtension, file)
}

func CurrentPackageFromContext(ctx context.Context) string {
	if val, ok := ctx.Value(ctxKeyCurrentPackage).(string); ok {
		return val
	}
	return ""
}

func ContextWithCurrentPackage(ctx context.Context, pkg string) context.Context {
	return context.WithValue(ctx, ctxKeyCurrentPackage, pkg)
}
