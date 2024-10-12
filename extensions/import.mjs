import importPlugin from "eslint-plugin-import";
import sortImportsES6Autofix from "eslint-plugin-sort-imports-es6-autofix";


export default [
	importPlugin.flatConfigs.recommended,
	{
		plugins: {
			"sort-imports-es6-autofix": sortImportsES6Autofix
		},
		rules: {
			"sort-imports-es6-autofix/sort-imports-es6": ["warn", {
				ignoreCase: true,
				memberSyntaxSortOrder: ["all", "multiple", "single", "none"]
			}],
			"import/no-named-as-default-member": "off",
			"import/no-anonymous-default-export": "off",
			"import/newline-after-import": ["warn", { count: 2, considerComments: true }],
			"import/order": ["warn", {
				"newlines-between": "always",
				"groups": [["type", "unknown", "builtin"], "external", ["internal", "parent", "index", "sibling"]],
				"warnOnUnassignedImports": true
			}],
			"import/first": "error",
			"import/no-amd": "error",
			"import/no-webpack-loader-syntax": "error",
			"import/no-unresolved": ["error", { commonjs: true }]
		}
	}
];