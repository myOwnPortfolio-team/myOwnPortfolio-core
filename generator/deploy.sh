#!/bin/bash
set -e # exit with nonzero exit code if anything fails

# clear and re-create the out directory
rm -rf dist || exit 0;

# run our compile script, discussed above
./generator/compile.sh

# go to the out directory and create a *new* Git repo
cd dist
sudo git init

# inside this git repo we'll pretend to be a new user
sudo git config user.name "MacBootglass"
sudo git config user.email "thibault.theologien@insa-rouen.fr"

# The first and only commit to this new Git repo contains all the
# files present with the commit message "Deploy to GitHub Pages".
git add *
git commit -m "Deploy"

# Force push from the current repo's master branch to the remote
# repo's gh-pages branch. (All previous history on the gh-pages branch
# will be lost, since we are overwriting it.) We redirect any output to
# /dev/null to hide any sensitive credential data that might otherwise be exposed.
git push -fq "https://${GH_TOKEN}@${GH_REF}"
