#!/usr/bin/env bash

set -euxo pipefail

cd "$(dirname "$0")"

cd ../e2e

docker run \
  --rm \
  -it \
  --volume $(pwd):/e2e \
  --workdir /e2e \
  cypress/included:4.3.0 run \
  --browser chrome \
  --headless
