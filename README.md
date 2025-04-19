# eslint-config-arklint
My personal ESLint configuration.

---

## Installation

```shell
yarn add eslint eslint-config-arklint -D
```

## Usage

> [!WARNING]
> Only **ESM flat config** is supported.  
> If your project uses CJS, you need to use the `.mjs` extension for your ESLint config file.

The default configuration includes standards and stylistic rules for JS. Optional extensions can be added to add rules for `import`, `react` and `jsdoc`:

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
