# docs.sourcegraph.com

The templates and assets for [docs.sourcegraph.com](https://docs.sourcegraph.com). The actual documentation content lives in [sourcegraph/sourcegraph@`docs`](https://github.com/sourcegraph/sourcegraph/tree/docs/doc) (will be merged to `master` soon).

## Usage

Install `docsite`:

```shell
go get github.com/sourcegraph/docsite/cmd/docsite
```

The following commands assume that you are in this repository's top-level directory and that [sourcegraph/sourcegraph@`docs`](https://github.com/sourcegraph/sourcegraph/tree/docs) is checked out at `../sourcegraph`.

To run an HTTP server for this site:

```shell
docsite -assets assets -sources ../sourcegraph/doc -templates templates serve
```

To check for common problems in the Markdown and template files:

```shell
docsite -assets assets -sources ../sourcegraph/doc -templates templates check -skip-urls '(^#|^https?://)'
```
