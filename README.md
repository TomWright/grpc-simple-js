# grpc-simple-ts

A simple wrapper around [grpc-web](https://github.com/grpc/grpc-web) that maintains typing as outlined in the proto file.

## Table of Contents

* [About](#about)
* [Protoc Usage](#protoc-usage)
* [Typescript Usage](#typescript-usage)

## About

Using grpc-web from typescript should be simpler than it is. The compiled data structures and types can make it hard to get started.

This package compiles additional types and mappers that you can use on top of grpc-web to simplify the way you interact with it in your application.

## Protoc Usage

First make sure that you have a `grpc-simple-ts` executable installed: 
```
go get -v -ldflags="-s -w" \
		github.com/golang/protobuf/protoc-gen-go \
		github.com/tomwright/grpc-simple-ts/cmd/protoc-gen-simple-ts@${GO_VERSION_LOCK_SIMPLE_TS} \
		2>&1
```

And then use `--simple-ts_out=./out` to activate the plugin.

Please note that values of `simple-ts_out`, `grpc-web_out` and `js_out` should match otherwise the generated code may include invalid paths.
```
protoc \
		--js_out="import_style=commonjs,binary:./out" \
		--grpc-web_out="import_style=commonjs+dts,mode=grpcwebtext:./out" \
		--simple-ts_out="./out" \
		my.proto
```

## Typescript Usage

Coming soon.