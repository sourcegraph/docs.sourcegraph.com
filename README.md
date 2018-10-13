# Templates and assets for [docs.sourcegraph.com](https://docs.sourcegraph.com)

The templates and assets for [docs.sourcegraph.com](https://docs.sourcegraph.com). The actual documentation content lives in [sourcegraph/sourcegraph in `docs/`](https://github.com/sourcegraph/sourcegraph/tree/master/doc).

## Requirements

- Go 1.11

## Usage

This uses [docsite](https://github.com/sourcegraph/docsite), which you can install by running:

```shell
GO111MODULE=on go get github.com/sourcegraph/docsite/cmd/docsite
```

The following commands assume that you are in this repository's top-level directory and that [sourcegraph/sourcegraph@`docs`](https://github.com/sourcegraph/sourcegraph/tree/docs) is checked out at `../sourcegraph`.

To run a web server for this doc site:

```shell
docsite serve
```

To check for common problems in the Markdown and template files:

```shell
docsite check
```
