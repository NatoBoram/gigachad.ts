# `@natoboram/gigachad.ts`

[![Docker CI](https://github.com/NatoBoram/gigachad.ts/actions/workflows/docker.yaml/badge.svg)](https://github.com/NatoBoram/gigachad.ts/actions/workflows/docker.yaml) [![GitHub Pages](https://github.com/NatoBoram/gigachad.ts/actions/workflows/github-pages.yaml/badge.svg)](https://github.com/NatoBoram/gigachad.ts/actions/workflows/github-pages.yaml) [![Node.js CI](https://github.com/NatoBoram/gigachad.ts/actions/workflows/node.js.yaml/badge.svg)](https://github.com/NatoBoram/gigachad.ts/actions/workflows/node.js.yaml) [![Dependabot Updates](https://github.com/NatoBoram/gigachad.ts/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/NatoBoram/gigachad.ts/actions/workflows/dependabot/dependabot-updates)

The most gigachad project setup for TypeScript.

- Containerize with [Docker](https://github.com/docker/cli)
- Deliver continuously with GitHub Workflow
- Document with [TypeDoc](https://github.com/TypeStrong/typedoc)
- Enforce format-on-save in [VSCode](https://github.com/microsoft/vscode)
- Execute workflows locally with [`act`](https://github.com/nektos/act)
- Format with [Prettier](https://github.com/prettier/prettier)
- Lint code with [ESLint](https://github.com/eslint/eslint)
- Lint markdown with [markdownlint](https://github.com/DavidAnson/markdownlint)
- Manage packages with [pnpm](https://github.com/pnpm/pnpm)
- Pledge your respect with the [Contributor Covenant](https://github.com/EthicalSource/contributor_covenant)
- Run with [Node.js](https://nodejs.org/api/typescript.html#type-stripping)
- Test units with [Vitest](https://github.com/vitest-dev/vitest)
- Update dependencies with [Dependabot](https://github.com/dependabot/dependabot-core)

## Publishing

This template offers a GitHub Workflow to help you automatically bump the version number, commit it, tag it, push it, then publish it to both NPM, the GitHub Package Registry and in GitHub Releases on the click of a button.

To publish on NPM, you'll need to provide your NPM token.

1. Sign in to <https://www.npmjs.com>
2. Access Tokens / Generate New Token / Classic Token / Automation / Generate Token
3. Copy that token and save it in your project's secrets at `/settings/secrets/actions/new` with the name `NODE_AUTH_TOKEN`
