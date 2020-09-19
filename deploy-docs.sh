#!/usr/bin/env sh

set -e
npm run docs:build
cd docs/.vuepress/dist
echo 'zents.dev' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:sahachide/ZenTS.git master:gh-pages
cd -