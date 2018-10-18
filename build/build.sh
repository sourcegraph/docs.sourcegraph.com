#!/bin/bash

set +eux -o pipefail

unset CDPATH
cd $(dirname "${BASH_SOURCE[0]}")/..

env GOOS=linux GARCH=amd64 CGO_ENABLED=0 go build -o .bin/docsite -a -installsuffix cgo -ldflags="-w -s" github.com/sourcegraph/docsite/cmd/docsite

TMPDIR=build/tmp-sourcegraph-doc
rm -rf "$TMPDIR"
mkdir "$TMPDIR"
curl https://codeload.github.com/sourcegraph/sourcegraph/tar.gz/master | tar -C "$TMPDIR" -xz --strip-components=2 sourcegraph-master/doc

jq '.content = "'"$TMPDIR"'"' docsite.json > build/docsite.json
# .bin/docsite -config build/docsite.json check
.bin/docsite -config build/docsite.json build -o build/docsite-docs.sourcegraph.com

IMAGE=sourcegraph/docs.sourcegraph.com
cd build && docker build -t "$IMAGE" .
echo Built Docker image "$IMAGE"