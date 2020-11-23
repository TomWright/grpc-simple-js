package mapping

import (
	"strings"
)

const protoExt = ".proto"
const simpleJSExt = "_sjs"

func ProtoToSimpleJS(path string, withExt bool, additionalSuffix string) string {
	if strings.HasSuffix(path, protoExt) {
		path = strings.TrimSuffix(path, protoExt) + additionalSuffix + simpleJSExt
		if withExt {
			path += ".ts"
		}
	}
	return path
}

func RelativePathBetweenPaths(from string, to string) string {
	if from == to {
		return ""
	}
	splitFrom := strings.Split(from, "/")
	splitTo := strings.Split(to, "/")
	endFile := splitTo[len(splitTo)-1]
	splitFrom = splitFrom[:len(splitFrom)-1]
	splitTo = splitTo[:len(splitTo)-1]

	var matchesUpTo int
	for matchesUpTo = 0; matchesUpTo < len(splitFrom) && matchesUpTo < len(splitTo); matchesUpTo++ {
		if splitFrom[matchesUpTo] != splitTo[matchesUpTo] {
			break
		}
	}

	relativePath := ""
	for remaining := len(splitFrom); matchesUpTo < remaining; remaining-- {
		relativePath += "../"
	}

	if relativePath == "" {
		relativePath = "./"
	}

	for i := matchesUpTo; i < len(splitTo); i++ {
		relativePath += splitTo[i] + "/"
	}
	relativePath += endFile

	return relativePath
}
