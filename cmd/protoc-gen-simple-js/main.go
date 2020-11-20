package main

import (
	"github.com/tomwright/grpc-simple-js/internal"
	"google.golang.org/protobuf/compiler/protogen"
	_ "google.golang.org/protobuf/compiler/protogen"
)

// Loosely based off of https://github.com/drekle/protoc-gen-goexample/blob/master/main.go
func main() {
	runner := &internal.Runner{}

	protogen.Options{
		ParamFunc:         nil,
		ImportRewriteFunc: nil,
	}.Run(runner.Run)
}
