# `gigachad.ts`

[![GitHub Pages](https://github.com/NatoBoram/gigachad.ts/actions/workflows/github-pages.yaml/badge.svg)](https://github.com/NatoBoram/gigachad.ts/actions/workflows/github-pages.yaml) [![Node.js CI](https://github.com/NatoBoram/gigachad.ts/actions/workflows/node.js.yaml/badge.svg)](https://github.com/NatoBoram/gigachad.ts/actions/workflows/node.js.yaml)

The most gigachad project setup for TypeScript.

<img align="right" alt="The most gigachad TypeScript programmer, writing high-quality well-tested code, big muscles, enjoyer, handsome face, digital painting, high resolution, ultra realistic, hands on keyboard" src="https://github.com/NatoBoram/gigachad.ts/assets/10495562/fbfbfe68-a1d2-4a12-b3e0-cb1d4a89b91f" />

- Dependency updates with [Dependabot](https://github.com/dependabot/dependabot-core)
- Documentation with [TypeDoc](https://github.com/TypeStrong/typedoc)
- Enforce format-on-save in [VSCode](https://github.com/microsoft/vscode)
- Formatting with [Prettier](https://github.com/prettier/prettier)
- Linting with [ESLint](https://github.com/eslint/eslint)
- Publish it with a GitHub Workflow
- Run it with [`tsx`](https://github.com/privatenumber/tsx)
- Unit tests with [Vitest](https://github.com/vitest-dev/vitest)

## Publishing

This template offers a GitHub Workflow to help you automatically bump the version number, tag it, push it, and publish it to both NPM and the GitHub Package Registry on the click of a button.

To make the `git push` work when signed commits are enforced (because you are a gigachad), you'll need to provide a SSH key.

1. Genereate a SSH key with <https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key>
2. Add the private key to your project's secrets at `/settings/secrets/actions/new` with the name `SIGNING_KEY_PRIVATE`
3. Add the public key to your project's secrets at `/settings/secrets/actions/new` with the name `SIGNING_KEY_PUBLIC`

To publish on NPM, you'll need to provide your NPM token.

1. Sign in to <https://www.npmjs.com>
2. Access Tokens / Generate New Token / Classic Token / Automation / Generate Token
3. Copy that token and save it in your project's secrets at `/settings/secrets/actions/new` with the name `NODE_AUTH_TOKEN`
