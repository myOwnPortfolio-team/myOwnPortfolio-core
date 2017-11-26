#!/bin/bash
if [ ! -d dist ]; then
  mkdir -p dist/style
fi
cp -r ./node_modules/font-awesome/fonts dist/fonts
cp -r ./node_modules/semantic-ui-sass/icons dist/icons
cp ./app/index.html ./dist/
