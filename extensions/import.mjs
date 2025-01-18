import importPlugin from "eslint-plugin-import";
import perfectionistPlugin from "eslint-plugin-perfectionist";


export default [
	importPlugin.flatConfigs.recommended,
	{
		plugins: {
			perfectionist: perfectionistPlugin
		},
		rules: {
			"import/no-named-as-default-member": "off",
			"import/no-anonymous-default-export": "off",
			"import/newline-after-import": ["warn", {
				count: 2,
				considerComments: true
			}],
			"import/first": "error",
			"import/no-amd": "error",
			"import/no-webpack-loader-syntax": "error",
			"import/no-unresolved": ["error", {
				commonjs: true
			}],
			"perfectionist/sort-exports": "warn",
			"perfectionist/sort-named-exports": "warn",
			"perfectionist/sort-named-imports": "warn",
			"perfectionist/sort-imports": ["warn", {
				groups: [
					"type",
					"unknown",
					"builtin",
					"external",
					"internal",
					"parent",
					["index", "sibling", "style"]
				]
			}]
		}
	}
];