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

The default configuration includes standards and stylistic rules for JS. Optional extensions can be added to add rules for `import`, `react` and `jsdoc`:

**ESM**

```js
import arklintConfig from "eslint-config-arklint";
import extensions from "eslint-config-arklint/extensions";

const { importConfig, reactConfig, jsdocConfig } = extensions;

export default [
  ...arklintConfig,
  ...reactConfig,
  ...importConfig,
  ...jsdocConfig
];
```

**CJS**

```js
const arklintConfig = require("eslint-config-arklint");
const { importConfig, reactConfig, jsdocConfig } = require("eslint-config-arklint/extensions");

module.exports = [
  ...arklintConfig,
  ...reactConfig,
  ...importConfig,
  ...jsdocConfig
];
```
