import arklintConfig from "./index.mjs";
import importConfig from "./extensions/import.mjs";
import jsdocConfig from "./extensions/jsdoc.mjs";


export default [
	...arklintConfig,
	...importConfig,
	...jsdocConfig,
	{
		ignores: ["cjs/"]
	}
];