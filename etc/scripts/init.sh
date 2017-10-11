#!/bin/bash
if [ ! -d dist ]; then
  mkdir -p dist/style
fi
npm install
cp -r ./node_modules/font-awesome/fonts dist/fonts
cp ./app/index.html ./dist/
