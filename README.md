# `@natoboram/gigachad.ts`

[![Node.js CI](https://github.com/NatoBoram/gigachad.ts/actions/workflows/node.js.yaml/badge.svg)](https://github.com/NatoBoram/gigachad.ts/actions/workflows/node.js.yaml) [![Docker CI](https://github.com/NatoBoram/gigachad.ts/actions/workflows/docker.yaml/badge.svg)](https://github.com/NatoBoram/gigachad.ts/actions/workflows/docker.yaml) [![Coverage](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fnatoboram.github.io%2Fgigachad.ts%2Fcoverage%2Fcoverage-summary.json&query=total.branches.pct&suffix=%25&logo=vitest&label=coverage&color=acd268)](https://natoboram.github.io/gigachad.ts/coverage) [![GitHub Pages](https://github.com/NatoBoram/gigachad.ts/actions/workflows/github-pages.yaml/badge.svg)](https://github.com/NatoBoram/gigachad.ts/actions/workflows/github-pages.yaml) [![Dependabot Updates](https://github.com/NatoBoram/gigachad.ts/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/NatoBoram/gigachad.ts/actions/workflows/dependabot/dependabot-updates)

The most gigachad project setup for TypeScript.

- Containerize with [Docker](https://github.com/docker/cli)
- Deliver continuously with GitHub Workflow
- Document with [TypeDoc](https://github.com/TypeStrong/typedoc)
- Execute workflows locally with [`act`](https://github.com/nektos/act)
- Format on save in [VSCode](https://github.com/microsoft/vscode)
- Format with [Prettier](https://github.com/prettier/prettier)
- Keep a changelog with the [Keep a Changelog](https://keepachangelog.com) format
- Lint code with [ESLint](https://github.com/eslint/eslint)
- Lint markdown with [markdownlint](https://github.com/DavidAnson/markdownlint)
- Manage packages with [pnpm](https://github.com/pnpm/pnpm)
- Pledge your respect with the [Contributor Covenant](https://github.com/EthicalSource/contributor_covenant)
- Run with [Node.js](https://nodejs.org/api/typescript.html#type-stripping)
- Test units and calculate coverage with [Vitest](https://github.com/vitest-dev/vitest)
- Update dependencies with [Dependabot](https://github.com/dependabot/dependabot-core)

## Publishing

This template offers a GitHub Workflow to help you automatically publish a version to both NPM, the GitHub Package Registry and in GitHub Releases on the push of a tag.

Start by updating your version number:

```sh
git checkout main
git pull --autostash --prune --rebase
VERSION=$(pnpm version patch --no-git-tag-version)
git checkout -b "release/$VERSION"
git commit --all --message "🔖 $VERSION"
git push --set-upstream origin "release/$VERSION"
gh pr create --base main --draft --fill --head "release/$VERSION" --title "🔖 $VERSION"
```

Once your CI passes, merge the pull request, wait for the CI to pass again then push a new tag:

```sh
git checkout main
git pull --autostash --prune --rebase
git tag "$VERSION" --annotate --message "🔖 $VERSION" --sign
git push --tags
```

To publish on NPM, you'll need to provide your NPM token.

1. Sign in to <https://www.npmjs.com>
2. Access Tokens / Generate New Token / Classic Token / Automation / Generate Token
3. Copy that token and save it in your project's secrets at `/settings/secrets/actions/new` with the name `NODE_AUTH_TOKEN`
