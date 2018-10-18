FROM alpine:3.8

COPY docsite-docs.sourcegraph.com /
EXPOSE 80/tcp
CMD ["/docsite-docs.sourcegraph.com", "serve", "-http=:80"]