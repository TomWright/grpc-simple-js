# grpc-simple-ts

A simple wrapper around [grpc-web](https://github.com/grpc/grpc-web) that maintains typing as outlined in the proto file.

## Basic usage

```
go get -v -ldflags="-s -w" \
		github.com/golang/protobuf/protoc-gen-go \
		github.com/tomwright/grpc-simple-js/cmd/protoc-gen-simple-js@${GO_VERSION_LOCK_SIMPLE_JS} \
		2>&1

protoc \
		--js_out="import_style=commonjs,binary:./out" \
		--grpc-web_out="import_style=commonjs+dts,mode=grpcwebtext:./out" \
		--simple-ts_out="./out" \
		my.proto
```
