#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

function doBuild {
  npm install
  gulp make-site
}

# Pull requests and commits to other branches shouldn't try to deploy, just build to verify
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Skipping deploy; just doing a build."
    doCompile
    exit 0
fi

bash ./deploy.sh
