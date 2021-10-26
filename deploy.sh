#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build --mode github

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/ThomasNeis-WeAreYou/player.git main:gh-pages

cd -