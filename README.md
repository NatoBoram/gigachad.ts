# `@natoboram/gigachad.ts`

[![Node.js CI](https://github.com/NatoBoram/gigachad.ts/actions/workflows/node.js.yaml/badge.svg)](https://github.com/NatoBoram/gigachad.ts/actions/workflows/node.js.yaml) [![Docker CI](https://github.com/NatoBoram/gigachad.ts/actions/workflows/docker.yaml/badge.svg)](https://github.com/NatoBoram/gigachad.ts/actions/workflows/docker.yaml) [![CodeQL](https://github.com/NatoBoram/gigachad.ts/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/NatoBoram/gigachad.ts/actions/workflows/github-code-scanning/codeql) [![Coverage](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fnatoboram.github.io%2Fgigachad.ts%2Fcoverage%2Fcoverage-summary.json&query=total.branches.pct&suffix=%25&logo=Vitest&label=Coverage&color=acd268)](https://natoboram.github.io/gigachad.ts/coverage) [![GitHub Pages](https://github.com/NatoBoram/gigachad.ts/actions/workflows/github-pages.yaml/badge.svg)](https://github.com/NatoBoram/gigachad.ts/actions/workflows/github-pages.yaml) [![Dependabot Updates](https://github.com/NatoBoram/gigachad.ts/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/NatoBoram/gigachad.ts/actions/workflows/dependabot/dependabot-updates) [![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/NatoBoram/gigachad.ts?logo=CodeRabbit&logoColor=FF570A&label=CodeRabbit%20Reviews&labelColor=171717&color=FF570A)](https://github.com/NatoBoram/gigachad.ts/pulls?q=reviewed-by%3Acoderabbitai%5Bbot%5D)

The most gigachad project setup for TypeScript.

- Build with [tsgo](https://github.com/microsoft/typescript-go)
- Containerize with [Docker](https://github.com/docker/cli)
- Deliver continuously with GitHub Workflows
- Document with [TypeDoc](https://github.com/TypeStrong/typedoc)
- Execute workflows locally with [`act`](https://github.com/nektos/act)
- Format on save in [VSCode](https://github.com/microsoft/vscode)
- Format with [Prettier](https://github.com/prettier/prettier)
- Host on [IPFS](https://github.com/ipfs/kubo)
- Interact with GitHub using [`gh`](https://github.com/cli/cli)
- Keep a changelog with the [Keep a Changelog](https://keepachangelog.com) format
- Lint code with [ESLint](https://github.com/eslint/eslint)
- Lint markdown with [markdownlint](https://github.com/DavidAnson/markdownlint)
- Manage packages with [pnpm](https://github.com/pnpm/pnpm)
- Pledge your respect with the [Contributor Covenant](https://github.com/EthicalSource/contributor_covenant)
- Publish to [GitHub Packages](https://docs.github.com/packages)
- Publish to [GitHub Releases](https://docs.github.com/repositories/releasing-projects-on-github)
- Publish to the [JavaScript Registry](https://jsr.io)
- Publish to the [npm public registry](https://npmjs.com)
- Review your code with [CodeRabbit](https://github.com/marketplace/coderabbitai)
- Run with [Node.js](https://nodejs.org/api/typescript.html#type-stripping)
- Search public code on [grep.app](https://grep.app)
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
   - `gigachad-ts`: The name of your package on JSR
   - `gigachad`: The name of the command-line interface exposed by this package
2. [Choose an open source license](https://choosealicense.com)
   - Delete the existing one in [`LICENSE.txt`](LICENSE.txt) and place your own
   - Find your license in the [SPDX License List](https://spdx.org/licenses) and put it in [`package.json`](package.json) and [`jsr.json`](jsr.json)
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
rm -rf .coderabbit.yaml .gemini .github/copilot-instructions.md .github/instructions .github/workflows/copilot-setup-steps.yaml .vscode/mcp.json GEMINI.md
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
# IPFS
rm -rf .github/workflows/ipfs.yaml
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

```sh
# Run
pnpm pkg delete bin exports files main module scripts.build scripts.dev scripts.docker scripts.docker:build scripts.docker:kill scripts.docker:run scripts.docs scripts.start types
pnpm pkg set private=true
pnpm uninstall @typescript/native-preview typedoc
rm -rf .dockerignore .github/workflows/docker.yaml .github/workflows/github-pages.yaml Dockerfile src/index.ts src/main.ts typedoc.json
```

## Publishing

This template offers a GitHub Workflow to help you automatically publish a version to NPM, to GitHub Packages, to GitHub Releases and to JSR on the push of a tag.

Start by updating your version number:

```sh
git checkout main
git pull --autostash --prune --rebase

VERSION=$(pnpm version patch --no-git-tag-version)
echo $(jq --arg v "${VERSION#v}" '.version = $v' jsr.json) > jsr.json
pnpm run format

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
3. Create an environment in your repository at `/settings/environments` with the name `npm-public-registry`
4. Save your new token in the `npm-public-registry` environment in a new secret called `NODE_AUTH_TOKEN`

To publish on JSR, you'll need to create a scope and register your package first.

1. Sign in to <https://jsr.io>
2. <kbd>Publish a package</kbd>
3. Select or create a scope and register your package name
4. Link your package to GitHub
5. Create an environment in your repository at `/settings/environments` with the name `javascript-registry`

You can also create the environments `github-packages-registry` and `github-releases` for the publishing workflow to use automatically.

## Dependabot labels

You can import some relevant labels from Dependabot with these commands:

```sh
gh label create dependencies --color '#0366d6' --description 'Pull requests that update a dependency file' --force
gh label create docker --color '#21ceff' --description 'Pull requests that update Docker code' --force
gh label create docker_compose --color '#e5f2fc' --description 'Pull requests that update Docker Compose code' --force
gh label create github_actions --color '#000000' --description 'Pull requests that update GitHub Actions code' --force
gh label create javascript --color '#168700' --description 'Pull requests that update JavaScript code' --force
```
