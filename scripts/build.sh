#!/usr/bin/env bash

set -euxo pipefail

cd "$(dirname "$0")"

cd ../app

yarn --no-progress
yarn run build

if [ "${CI:=""}" ]; then
  echo "ci. yay! 🤖"
  cp -R dist manifest.yml ../../build-output
else
  echo "not ci. 💻"
fi
