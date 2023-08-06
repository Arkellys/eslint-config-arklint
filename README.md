# eslint-config-arklint
My personal ESLint configuration. Most of it is based on [eslint-config-react-app](https://github.com/facebook/create-react-app/blob/0a827f69ab0d2ee3871ba9b71350031d8a81b7ae/packages/eslint-config-react-app/README.md) but with additional stylistic and JSDoc rules.

---

## Installation

```shell
yarn add eslint-config-arklint -D
```
ESLint and all the plugins used in the config are dependencies, so no need to install them. I'm aware that ESLint is supposed to be in the `peerDependencies`, but since I'm maintaining my own package I would rather to have everything in one place for when I update the versions.

## Usage

Add the extend in your `.eslintrc.js`:

```javascript
module.exports = {
  extends: "arklint",
  rules: {
    // Rule overrides
  }
}
```

The default configuration includes the extensions for `import` and `jsdoc`. The configuration for `react` has to be added manually:

```javascript
module.exports = {
  extends: [
    "arklint",
    "arklint/extensions/react"
  ],
  rules: {
    // Rule overrides
  }
}
```