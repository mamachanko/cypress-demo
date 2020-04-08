#!/usr/bin/env bash

set -euxo pipefail

cd "$(dirname "$0")"

cd ../app

cf push
