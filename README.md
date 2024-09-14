# eslint-config-arklint
My personal ESLint configuration.

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
