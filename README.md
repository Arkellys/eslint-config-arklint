# eslint-config-arklint
My personal ESLint configuration. Most of it is based on [eslint-config-react-app](https://github.com/facebook/create-react-app/blob/0a827f69ab0d2ee3871ba9b71350031d8a81b7ae/packages/eslint-config-react-app/README.md) but with additional stylistic and JSDoc rules.

---

## Installation

```shell
yarn add eslint-config-arklint -D
```

You also need to add [ESLint](https://github.com/eslint/eslint) in your `devDependencies`:

```shell
yarn add eslint -D
```

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
