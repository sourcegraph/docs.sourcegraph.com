# Templates and assets for [docs.sourcegraph.com](https://docs.sourcegraph.com)

This repository houses the templates and assets for [docs.sourcegraph.com](https://docs.sourcegraph.com). The actual documentation content lives in [sourcegraph/sourcegraph in `doc/`](https://github.com/sourcegraph/sourcegraph/tree/master/doc). The [docsite](https://github.com/sourcegraph/docsite) program is used to serve the documentation website.

> NOTE: If you want to just preview changes to documentation (not templates and assets), you can view them in your Sourcegraph local dev server at http://localhost:3080/help.

## Previewing template and asset changes

To preview changes to documentation content, [`templates/`](templates) and [`assets/`](assets), you need to:

- Install Go 1.11+
- Install [docsite](https://github.com/sourcegraph/docsite).
- Enable docsite to access the Sourcegraph `/doc` directory

### Installing docsite

To install docsite, in your terminal, change into the top-level directory of this repository, then run:

```shell
GO111MODULE=on go get -u github.com/sourcegraph/docsite/cmd/docsite
```

If that doesn't work, try this:

```shell
# blackfriday go mod workaround
go mod edit -replace=gopkg.in/russross/blackfriday.v2@v2.0.1=github.com/russross/blackfriday/v2@v2.0.1
GO111MODULE=on go get -u github.com/sourcegraph/docsite/cmd/docsite
```

### How docsite accesses documentation content

The [`docsite.json`](docsite.json) file expects documentation to be in [`../sourcegraph/doc`](https://github.com/sourcegraph/sourcegraph/tree/master/doc), which is assumed to be in your local clone of [sourcegraph/sourcegraph](https://github.com/sourcegraph/sourcegraph). In other words, the `sourcegraph` local clone should be a sibling of the `docs.sourcegraph.com` local clone.

## Running the docsite server

To run the docsite server:

```shell
docsite serve
```

Then visit http://localhost:5080.

## Checking for problems (e.g. broken links)

To check for problems in the Markdown and template files, run:

```shell
docsite check
```

It's recommended to run this before pushing docs or template/assets changes and is run as part of the Sourcegraph build job.

## Emulating https://docs.sourcegraph.com by running in Docker

> NOTE: This is how https://docs.sourcegraph.com is deployed.

> NOTE: Running in Docker is only suitable for production or when downloading zipped assets.

To start a web server with the latest documentation content (and templates and assets from this repository's `docs.sourcegraph.com` branch), run:

```shell
docker run -p 5080:5080 \
  -e DOCSITE_CONFIG='{"templates":"https://codeload.github.com/sourcegraph/docs.sourcegraph.com/zip/docs.sourcegraph.com#*/templates/","assets":"https://codeload.github.com/sourcegraph/docs.sourcegraph.com/zip/docs.sourcegraph.com#*/assets/","content":"https://codeload.github.com/sourcegraph/sourcegraph/zip/$VERSION#*/doc/","baseURLPath":"/","assetsBaseURLPath":"/assets/"}' \
  sourcegraph/docsite serve
```

Then visit http://localhost:5080.

## Updating production templates and assets

Push to this repository's `docs.sourcegraph.com` branch:

```shell
git commit
git push origin HEAD:docs.sourcegraph.com
```

Then run `kubectl delete pod docs-sourcegraph-com-...` on the Kubernetes cluster that runs the `docs-sourcegraph-com` deployment. The pod will be restarted and will immediately re-download the new templates and assets. You can also just wait 5 minutes for the existing pod to periodically reload the templates and assets (instead of deleting the pod).
