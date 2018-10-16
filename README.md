# Sourcegraph Docs

The templates and assets for [docs.sourcegraph.com](https://docs.sourcegraph.com). The actual documentation content lives in [sourcegraph/sourcegraph@`docs`](https://github.com/sourcegraph/sourcegraph/tree/docs/doc) (will be merged to `master` soon).

## Requirements

- Golang 1.11

## Usage

This uses [docsite](https://github.com/sourcegraph/docsite) which you can install by running:

```shell
make install-docsite
```

The following commands assume that you are in this repository's top-level directory and that [sourcegraph/sourcegraph@`docs`](https://github.com/sourcegraph/sourcegraph/tree/docs) is checked out at `../sourcegraph`.

To run an HTTP server for this site:

```shell
make server
```

To check for common problems in the Markdown and template files:

```shell
make check
```
