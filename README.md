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
- Run with [tsx](https://github.com/privatenumber/tsx)
- Test units with [Vitest](https://github.com/vitest-dev/vitest)
- Update dependencies with [Dependabot](https://github.com/dependabot/dependabot-core)

## Publishing

This template offers a GitHub Workflow to help you automatically bump the version number, tag it, push it, and publish it to both NPM, the GitHub Package Registry and in GitHub Releases on the click of a button.

To make the `git push` work, you'll need to use a [Deploy Key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys#deploy-keys).

1. Genereate a SSH key with <https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key>

   ```sh
   ssh-keygen -t ed25519 -C "@natoboram/gigachad.ts" -f new_ssh_key -N ""
   ```

2. Add the private key to your project's secrets at `/settings/secrets/actions/new` with the name `DEPLOY_KEY_PRIVATE`
3. Add the public key to your project's variables at `/settings/variables/actions/new` with the name `DEPLOY_KEY_PUBLIC`
4. Add the public key to your project's deploy keys at `/settings/keys`
5. Add the public key to `.github/authorized_keys` in the format of `41898282+github-actions[bot]@users.noreply.github.com <DEPLOY_KEY_PUBLIC>` while replacing `<DEPLOY_KEY_PUBLIC>` with your public key
6. Delete the key pair from your computer, never to be seen again

The `.github/authorized_keys` is used to sign and verify the signature of the build artefact that is sent to GitHub Releases. If you want to skip this step, you can remove it from `.github/workflows/pnpm-publish.yaml`.

To publish on NPM, you'll need to provide your NPM token.

1. Sign in to <https://www.npmjs.com>
2. Access Tokens / Generate New Token / Classic Token / Automation / Generate Token
3. Copy that token and save it in your project's secrets at `/settings/secrets/actions/new` with the name `NODE_AUTH_TOKEN`
