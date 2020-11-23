package mapping_test

import (
	"github.com/tomwright/grpc-simple-js/internal/mapping"
	"testing"
)

func TestRelativePathBetweenPaths(t *testing.T) {
	got := mapping.RelativePathBetweenPaths("src/ui/api/api.proto", "src/platform/query/match_strategy.proto")
	exp := "../../platform/query/match_strategy.proto"
	if exp != got {
		t.Errorf("expected %s, got %s", exp, got)
	}

	got = mapping.RelativePathBetweenPaths("src/ui/api/api.proto", "src/ui/api/crud.proto")
	exp = "./crud.proto"
	if exp != got {
		t.Errorf("expected %s, got %s", exp, got)
	}
}
