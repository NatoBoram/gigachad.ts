# Contributing

## Publishing

This repository offers a GitHub Workflow to help you automatically publish a version to NPM, GitHub Packages, GitHub Releases and JSR on the push of a tag.

Start by updating the version number:

```sh
git checkout main
git pull --autostash --prune --rebase

VERSION=$(pnpm version patch --json --no-git-tag-version | jq --raw-output '.[0].newVersion')
TAG="v$VERSION"
echo $(jq --arg v "$VERSION" '.version = $v' jsr.json) > jsr.json
pnpm run format

git checkout -b "release/$TAG"
git commit --all --message "🔖 $TAG"
git push --set-upstream origin "release/$TAG"

gh pr create --assignee @me --base main --draft --fill-verbose --head "release/$TAG" --title "🔖 $TAG"
```

Once the CI passes, merge the pull request, wait for the CI to pass again then push a new tag:

```sh
git checkout main
git pull --autostash --prune --rebase
git tag "$TAG" --annotate --message "🔖 $TAG" --sign
git push --tags
```
