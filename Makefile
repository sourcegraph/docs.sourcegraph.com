DOCS=../sourcegraph/doc

install-docsite:
	GO111MODULE=on go get github.com/sourcegraph/docsite/cmd/docsite

server:
	docsite -assets assets -sources $(DOCS) -templates templates serve

check:
	docsite -assets assets -sources $(DOCS) -templates templates check -skip-urls '(^#|^https?://)'
