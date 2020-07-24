#!/bin/env bash

docker build -t xnd-oauth:latest .
docker run -d -e GITHUB_CLIENT_SECRET=$GITHUB_CLIENT_SECRET -p 9000:9000 --rm xnd-oauth:latest
