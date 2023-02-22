#!/usr/bin/env sh

# abort on errors
set -e

git fetch origin
git checkout gh-pages
git merge -X theirs main --no-commit

# build
yarn run build

git add -A
git commit -m "[DEPLOY] New build"

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:telesyk/telesyk.github.io.git main:gh-pages

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

