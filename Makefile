.PHONY:
	all
	build
	autogen

all: build autogen

build:
	go build -o /usr/local/bin/protoc-gen-simple-js cmd/protoc-gen-simple-js/main.go

PROTOC_INCLUDES= -I. \
	-I/usr/local/include \
	-I${GOPATH}/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
	-I${GOPATH}/src/github.com/grpc-ecosystem/grpc-gateway \
	-I/Users/tom/repos/github.com/Skedulo/protobuf

SHELL := /usr/bin/env bash

GO_PACKAGE_ROOT=github.com/skedulo/protobuf
GOPATH?=~/go

# Lock versions for reproducibility
GO_VERSION_LOCK_PROTOBUF=4e55bbcbfaa105a596caba5bbc20d392806beda9
GO_VERSION_LOCK_GRPC_GW=v1.12.2
GO_VERSION_LOCK_GEN_DOC=cffb8204131441ff774a752499db0f4bd450e644
PYTHON_VERSION_LOCK_GRPC=v1.26.0
PYTHON_VERSION_LOCK_GOOGLEAPIS=v1.51.0
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
PROTOC_GEN_GRPC_PATH="./node_modules/.bin/grpc_tools_node_protoc_plugin"

PYTHON?=python3
PIP?=pip3
NODE?=node
NPM?=npm

SORTED_PROTO_FILES=$(shell find /Users/tom/repos/github.com/Skedulo/protobuf/src -name '*.proto' | sort)

default: clean autogen
dependencies: deps-go deps-ensure

format:
	clang-format -i --style=file ${SORTED_PROTO_FILES}

clean:
	rm -rf autogen

deps-ensure:
	@type ${PYTHON} 					1>/dev/null
	@type ${PIP} 						1>/dev/null
	@type ${NODE} 						1>/dev/null
	@type ${NPM} 						1>/dev/null
	@type protoc 						1>/dev/null
	@type protoc-gen-go 				1>/dev/null
	@type protoc-gen-grpc-gateway 		1>/dev/null
	@type protoc-gen-simple-js 			1>/dev/null
	@test -d /usr/local/include/google 	1>/dev/null
	@test make							1>/dev/null
	@test git							1>/dev/null
	# All dependencies found!

# Install Go dependencies at specified versions
deps-go:
	cd $(shell mktemp -d) && \
	go mod init temp 2>&1 && \
	go get -v -ldflags="-s -w" \
		github.com/golang/protobuf/protoc-gen-go@${GO_VERSION_LOCK_PROTOBUF} \
		github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway@${GO_VERSION_LOCK_GRPC_GW} \
		github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger@${GO_VERSION_LOCK_GRPC_GW} \
		github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc@${GO_VERSION_LOCK_GEN_DOC} \
		2>&1
	# We only need binaries for most of the above, but GRPC gateway also comes
	# with its third_party folder that needs to be under src, so copy that over
	# to the actual GOPATH. A bit hacky, but by making the temp module, Go will
	# use the GOPROXY and it's A LOT faster.
	mkdir -p ${GOPATH}/src/github.com/grpc-ecosystem/
	cp -r ${GOPATH}/pkg/mod/github.com/grpc-ecosystem/grpc-gateway@${GO_VERSION_LOCK_GRPC_GW} \
		${GOPATH}/src/github.com/grpc-ecosystem/grpc-gateway

autogen: deps-ensure clean gen-lang-web

#gen-lang-web:
#	rm -rf autogen
#	mkdir -p autogen
#	protoc ${PROTOC_INCLUDES} \
#		--simple-js_out="./autogen" \
#		${SORTED_PROTO_FILES}

gen-lang-web:
	rm -rf autogen/lang/web
	mkdir -p autogen/lang/web/
	protoc ${PROTOC_INCLUDES} \
		--js_out="import_style=commonjs,binary:./autogen/lang/web" \
		--grpc-web_out="import_style=commonjs+dts,mode=grpcwebtext:./autogen/lang/web" \
		--simple-js_out="./autogen/lang/web" \
		${SORTED_PROTO_FILES}
	find autogen/lang/web -type f \( -name "*.js" -o -name "*.ts" \) -exec sed -i '' '/google_api_annotations_pb/d' {} +
	find autogen/lang/web -type f -exec sed -i '' 's@../src/@@g' {} +
#	cp static/web/{package.json,tsconfig.json,webpack.config.js} autogen/lang/web
#	cp static/web/index.ts autogen/lang/web/src