package main

import (
	"github.com/tomwright/grpc-simple-ts/internal"
	"google.golang.org/protobuf/compiler/protogen"
	_ "google.golang.org/protobuf/compiler/protogen"
)

func main() {
	runner := internal.NewRunner()

	protogen.Options{
		ParamFunc:         nil,
		ImportRewriteFunc: nil,
	}.Run(runner.Run)
}
