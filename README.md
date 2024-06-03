# `gigachad.ts`

[![Docker CI](https://github.com/NatoBoram/gigachad.ts/actions/workflows/docker.yaml/badge.svg)](https://github.com/NatoBoram/gigachad.ts/actions/workflows/docker.yaml) [![GitHub Pages](https://github.com/NatoBoram/gigachad.ts/actions/workflows/github-pages.yaml/badge.svg)](https://github.com/NatoBoram/gigachad.ts/actions/workflows/github-pages.yaml) [![Node.js CI](https://github.com/NatoBoram/gigachad.ts/actions/workflows/node.js.yaml/badge.svg)](https://github.com/NatoBoram/gigachad.ts/actions/workflows/node.js.yaml) [![Dependabot Updates](https://github.com/NatoBoram/gigachad.ts/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/NatoBoram/gigachad.ts/actions/workflows/dependabot/dependabot-updates)

The most gigachad project setup for TypeScript.

<img
  align="right"
  alt="The most gigachad TypeScript programmer, writing high-quality well-tested code, big muscles, enjoyer, handsome face, digital painting, high resolution, ultra realistic, hands on keyboard"
  src="https://github.com/NatoBoram/gigachad.ts/assets/10495562/b113f3ee-38cf-4014-9a2e-737a48bad2e0"
  width="256"
/>

- Dependency updates with [Dependabot](https://github.com/dependabot/dependabot-core)
- Documentation with [TypeDoc](https://github.com/TypeStrong/typedoc)
- Enforce format-on-save in [VSCode](https://github.com/microsoft/vscode)
- Formatting with [Prettier](https://github.com/prettier/prettier)
- Lint code with [ESLint](https://github.com/eslint/eslint)
- Lint markdown with [markdownlint](https://github.com/DavidAnson/markdownlint)
- Package management with [pnpm](https://github.com/pnpm/pnpm)
- Publish it with a GitHub Workflow
- Run it with [tsx](https://github.com/privatenumber/tsx)
- Run your GitHub Actions locally with [`act`](https://github.com/nektos/act)
- Unit tests with [Vitest](https://github.com/vitest-dev/vitest)

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
