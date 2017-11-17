#!/bin/bash
if [ ! -d dist ]; then
  mkdir -p dist/style
fi
cp -r ./node_modules/font-awesome/fonts dist/fonts
cp ./app/index.html ./dist/
