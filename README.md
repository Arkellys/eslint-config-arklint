# eslint-config-arklint
My personal ESLint configuration.

---

## Installation

```shell
yarn add eslint eslint-config-arklint -D
```

## Usage

> [!WARNING]
> Only **flat config** is supported, either CJS or ESM.

### Default config

The default configuration includes standards and stylistic rules for JS.

```js
import arklintConfig from "eslint-config-arklint";

export default [
  ...arklintConfig
];
```

### Extensions

Optional extensions can be added to add rules for `import`, `react` and `jsdoc`:

```js
import arklintConfig from "eslint-config-arklint";
import { importConfig, reactConfig, jsdocConfig } from"eslint-config-arklint/extensions";

export default [
  ...arklintConfig,
  ...reactConfig,
  ...importConfig,
  ...jsdocConfig
];
```
