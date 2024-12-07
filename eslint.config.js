import importConfig from "./extensions/import.mjs";
import jsdocConfig from "./extensions/jsdoc.mjs";
import arklintConfig from "./index.mjs";


export default [
	...arklintConfig,
	...importConfig,
	...jsdocConfig,
	{
		rules: {
			"import/no-unresolved": ["error", {
				ignore: ["eslint-plugin-perfectionist"]
			}]
		}
	},
	{
		ignores: ["cjs/"]
	}
];