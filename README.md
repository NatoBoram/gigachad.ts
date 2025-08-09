# `@natoboram/gigachad.ts`

[![Node.js CI](https://github.com/NatoBoram/gigachad.ts/actions/workflows/node.js.yaml/badge.svg)](https://github.com/NatoBoram/gigachad.ts/actions/workflows/node.js.yaml) [![Docker CI](https://github.com/NatoBoram/gigachad.ts/actions/workflows/docker.yaml/badge.svg)](https://github.com/NatoBoram/gigachad.ts/actions/workflows/docker.yaml) [![CodeQL](https://github.com/NatoBoram/gigachad.ts/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/NatoBoram/gigachad.ts/actions/workflows/github-code-scanning/codeql) [![Coverage](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fnatoboram.github.io%2Fgigachad.ts%2Fcoverage%2Fcoverage-summary.json&query=total.branches.pct&suffix=%25&logo=vitest&label=coverage&color=acd268)](https://natoboram.github.io/gigachad.ts/coverage) [![GitHub Pages](https://github.com/NatoBoram/gigachad.ts/actions/workflows/github-pages.yaml/badge.svg)](https://github.com/NatoBoram/gigachad.ts/actions/workflows/github-pages.yaml) [![Dependabot Updates](https://github.com/NatoBoram/gigachad.ts/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/NatoBoram/gigachad.ts/actions/workflows/dependabot/dependabot-updates)

The most gigachad project setup for TypeScript.

- Containerize with [Docker](https://github.com/docker/cli)
- Deliver continuously with GitHub Workflows
- Document with [TypeDoc](https://github.com/TypeStrong/typedoc)
- Execute workflows locally with [`act`](https://github.com/nektos/act)
- Format on save in [VSCode](https://github.com/microsoft/vscode)
- Format with [Prettier](https://github.com/prettier/prettier)
- Interact with GitHub using [`gh`](https://github.com/cli/cli)
- Keep a changelog with the [Keep a Changelog](https://keepachangelog.com) format
- Lint code with [ESLint](https://github.com/eslint/eslint)
- Lint markdown with [markdownlint](https://github.com/DavidAnson/markdownlint)
- Manage packages with [pnpm](https://github.com/pnpm/pnpm)
- Pledge your respect with the [Contributor Covenant](https://github.com/EthicalSource/contributor_covenant)
- Run with [Node.js](https://nodejs.org/api/typescript.html#type-stripping)
- Secure your code with [CodeQL](https://github.com/github/codeql)
- Test units and calculate coverage with [Vitest](https://github.com/vitest-dev/vitest)
- Update dependencies with [Dependabot](https://github.com/dependabot/dependabot-core)

## Usage

Once you've forked this template, here's a few first steps to get you started:

1. Do a global search & replace for the following strings, in order:
   - `@natoboram/gigachad.ts`: This will become your package name
   - `NatoBoram/gigachad.ts`: This makes links to your repository
   - `Nato Boram`: Your author name for [`package.json`](package.json)
   - `NatoBoram`: Your GitHub username
   - `gigachad.ts`: The name of your new repository
   - `gigachad`: The name of the command-line interface exposed by this package
2. [Choose an open source license](https://choosealicense.com)
   - Delete the existing one in [`LICENSE.txt`](LICENSE.txt) and place your own
   - Find your license in the [SPDX License List](https://spdx.org/licenses) and put it in [`package.json`](package.json)
3. In your repository's `/settings/rules`, import the rulesets [`main.json`](.github/rulesets/main.json) and [`v.json`](.github/rulesets/v.json) then delete those files
   - Adapt the rules to your needs. For example, you may want to disable CodeQL or the `fix` workflow.
4. Remove the placeholder release in `CHANGELOG.md`
5. Update [`.github/CODEOWNERS`](.github/CODEOWNERS) to require code reviews from specific users or teams
6. Update [`.github/FUNDING.yaml`](.github/FUNDING.yaml) with your own sponsorship links
7. In [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md), update the contact link in the "Enforcement" section
8. Remove the parts you don't need with the help of the commands below

### Remove what you don't need

Here's a few useful commands to delete what you don't need.

```sh
# AI
rm -rf .gemini .github/copilot-instructions.md .github/instructions .vscode/mcp.json
```

```sh
# Command-line interface
pnpm pkg delete bin scripts.docker scripts.docker:build scripts.docker:kill scripts.docker:run scripts.start
rm -f .dockerignore .github/workflows/docker.yaml Dockerfile src/main.ts
```

```sh
# Docker
pnpm pkg delete scripts.docker scripts.docker:build scripts.docker:kill scripts.docker:run
rm -f .dockerignore .github/workflows/docker.yaml Dockerfile
```

```sh
# Documentation
pnpm pkg delete scripts.docs
pnpm uninstall typedoc
rm -f .github/workflows/github-pages.yaml typedoc.json
```

```sh
# Funding
pnpm pkg delete funding
rm -f .github/FUNDING.yaml
```

```sh
# Library
rm -f .github/workflows/github-pages.yaml typedoc.json src/index.ts
pnpm uninstall typedoc
pnpm pkg delete exports main module scripts.docs types
```

```sh
# Rulesets
rm -rf .github/rulesets
```

## Publishing

This template offers a GitHub Workflow to help you automatically publish a version to both the NPM public registry, the GitHub Package Registry and in GitHub Releases on the push of a tag.

Start by updating your version number:

```sh
git checkout main
git pull --autostash --prune --rebase
VERSION=$(pnpm version patch --no-git-tag-version)
git checkout -b "release/$VERSION"
git commit --all --message "🔖 $VERSION"
git push --set-upstream origin "release/$VERSION"
gh pr create --assignee @me --base main --draft --fill-verbose --head "release/$VERSION" --title "🔖 $VERSION"
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
