# `gigachad.ts`

The most gigachad project setup for TypeScript.

- Documentation with [TypeDoc](https://github.com/TypeStrong/typedoc)
- Enforce format-on-save in [VSCode](https://github.com/microsoft/vscode)
- Formatting with [Prettier](https://github.com/prettier/prettier)
- Linting with [ESLint](https://github.com/eslint/eslint)
- Publish it with a GitHub Workflow
- Run it with [`tsx`](https://github.com/privatenumber/tsx)
- Unit tests with [Vitest](https://github.com/vitest-dev/vitest)

## Publishing

This template offers a GitHub Workflow to help you automatically bump the version number, tag it, push it, and publish it to the GitHub Package Registry on the click of a button. To make the `git push` work when signed commits are enforced (because you are a gigachad), you'll need to provide a SSH key.

1. Genereate a SSH key with <https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key>
2. Add the private key to your project's secrets at `/settings/secrets/actions/new` with the name `SIGNING_KEY_PRIVATE`
3. Add the public key to your project's secrets at `/settings/secrets/actions/new` with the name `SIGNING_KEY_PUBLIC`

This will allow the GitHub Workflow to push the new tag to your repository.
