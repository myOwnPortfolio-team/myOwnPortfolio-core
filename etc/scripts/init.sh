#!/bin/bash
if [ ! -d dist/style ]; then
  mkdir -p dist/style
fi
cp -r ./node_modules/semantic-ui-sass/icons dist/icons
cp ./app/index.html ./dist/
