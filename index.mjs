import babelParser from "@babel/eslint-parser";
import globals from "globals";
import js from "@eslint/js";
import stylisticJsPlugin from "@stylistic/eslint-plugin-js";


export default [
	{
		files: ["**/*.{js,mjs,cjs,jsx}"]
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.commonjs,
				...globals.node,
				...globals.es2025
			},
			parser: babelParser,
			parserOptions: {
				requireConfigFile: false,
				ecmaVersion: "latest",
				babelOptions: {
					babelrc: false,
					configFile: false,
					presets: ["@babel/preset-env"]
				}
			}
		}
	},
	js.configs.recommended,
	{
		plugins: {
			"@stylistic/js": stylisticJsPlugin
		},
		rules: {
			"array-callback-return": "warn",
			"arrow-body-style": "warn",
			"camelcase": "warn",
			"default-case": ["warn", { commentPattern: "^no default$" }],
			"dot-notation": "warn",
			"eqeqeq": ["warn", "smart"],
			"getter-return": "warn",
			"no-array-constructor": "warn",
			"no-async-promise-executor": "off",
			"no-caller": "warn",
			"no-case-declarations": "off",
			"no-cond-assign": ["warn", "except-parens"],
			"no-const-assign": "warn",
			"no-control-regex": "warn",
			"no-delete-var": "warn",
			"no-dupe-args": "warn",
			"no-dupe-class-members": "warn",
			"no-dupe-keys": "warn",
			"no-duplicate-case": "warn",
			"no-duplicate-imports": "warn",
			"no-empty-character-class": "warn",
			"no-empty-pattern": "warn",
			"no-eval": "warn",
			"no-ex-assign": "warn",
			"no-extend-native": "warn",
			"no-extra-bind": "warn",
			"no-extra-label": "warn",
			"no-extra-semi": "off",
			"no-fallthrough": "warn",
			"no-func-assign": "warn",
			"no-global-assign": "warn",
			"no-implied-eval": "warn",
			"no-invalid-regexp": "warn",
			"no-iterator": "warn",
			"no-label-var": "warn",
			"no-labels": ["warn", {
				allowLoop: true,
				allowSwitch: false
			}],
			"no-lone-blocks": "warn",
			"no-loop-func": "warn",
			"no-multi-str": "warn",
			"no-new-func": "warn",
			"no-new-object": "warn",
			"no-new-symbol": "warn",
			"no-new-wrappers": "warn",
			"no-obj-calls": "warn",
			"no-octal-escape": "warn",
			"no-octal": "warn",
			"no-redeclare": "warn",
			"no-regex-spaces": "warn",
			"no-restricted-globals": [
				"error",
				"addEventListener",
				"blur",
				"close",
				"closed",
				"confirm",
				"event",
				"external",
				"focus",
				"frameElement",
				"frames",
				"history",
				"innerHeight",
				"innerWidth",
				"length",
				"location",
				"locationbar",
				"menubar",
				"moveBy",
				"moveTo",
				"name",
				"onblur",
				"onerror",
				"onfocus",
				"onload",
				"onresize",
				"onunload",
				"open",
				"opener",
				"outerHeight",
				"outerWidth",
				"pageXOffset",
				"pageYOffset",
				"parent",
				"print",
				"removeEventListener",
				"resizeBy",
				"resizeTo",
				"screen",
				"screenLeft",
				"screenTop",
				"screenX",
				"screenY",
				"scroll",
				"scrollbars",
				"scrollBy",
				"scrollTo",
				"scrollX",
				"scrollY",
				"self",
				"status",
				"statusbar",
				"stop",
				"toolbar",
				"top"
			],
			"no-restricted-syntax": ["warn", "WithStatement"],
			"no-script-url": "warn",
			"no-self-assign": "warn",
			"no-self-compare": "warn",
			"no-sequences": "warn",
			"no-shadow-restricted-names": "warn",
			"no-sparse-arrays": "warn",
			"no-template-curly-in-string": "warn",
			"no-this-before-super": "warn",
			"no-undef": "error",
			"no-unreachable": "warn",
			"no-unsafe-negation": "warn",
			"no-unused-expressions": ["error", {
				allowShortCircuit: true,
				allowTernary: true,
				allowTaggedTemplates: true
			}],
			"no-unused-labels": "warn",
			"no-unused-vars": ["warn", {
				caughtErrorsIgnorePattern: "^_"
			}],
			"no-use-before-define": ["warn", {
				functions: false,
				classes: false,
				variables: false
			}],
			"no-useless-escape": "warn",
			"no-useless-computed-key": "warn",
			"no-useless-concat": "warn",
			"no-useless-constructor": "warn",
			"no-useless-rename": "warn",
			"no-var": "warn",
			"no-with": "warn",
			"object-shorthand": ["warn", "always"],
			"prefer-arrow-callback": "warn",
			"require-await": "warn",
			"require-yield": "warn",
			"strict": ["warn", "never"],
			"unicode-bom": ["warn", "never"],
			"use-isnan": "warn",
			"valid-typeof": "warn",
			"@stylistic/js/array-bracket-newline": ["warn", "consistent"],
			"@stylistic/js/array-bracket-spacing": "warn",
			"@stylistic/js/array-element-newline": ["warn", "consistent"],
			"@stylistic/js/arrow-parens": "warn",
			"@stylistic/js/arrow-spacing": "warn",
			"@stylistic/js/block-spacing": "warn",
			"@stylistic/js/brace-style": ["warn", "1tbs", {
				allowSingleLine: true
			}],
			"@stylistic/js/comma-dangle": ["warn", "never"],
			"@stylistic/js/comma-spacing": "warn",
			"@stylistic/js/comma-style": "warn",
			"@stylistic/js/computed-property-spacing": "warn",
			"@stylistic/js/dot-location": ["warn", "property"],
			"@stylistic/js/eol-last": ["warn", "never"],
			"@stylistic/js/function-call-spacing": "warn",
			"@stylistic/js/function-call-argument-newline": ["warn", "consistent"],
			"@stylistic/js/function-paren-newline": ["warn", "consistent"],
			"@stylistic/js/implicit-arrow-linebreak": "warn",
			"@stylistic/js/indent": ["warn", "tab", {
				SwitchCase: 1,
				ignoreComments: true
			}],
			"@stylistic/js/key-spacing": "warn",
			"@stylistic/js/keyword-spacing": "warn",
			"@stylistic/js/new-parens": "warn",
			"@stylistic/js/no-confusing-arrow": "warn",
			"@stylistic/js/no-extra-semi": "warn",
			"@stylistic/js/no-floating-decimal": "warn",
			"@stylistic/js/no-mixed-operators": "warn",
			"@stylistic/js/no-multi-spaces": "warn",
			"@stylistic/js/no-multiple-empty-lines": ["warn", {
				max: 2,
				maxBOF: 0,
				maxEOF: 0
			}],
			"@stylistic/js/no-trailing-spaces": "warn",
			"@stylistic/js/no-whitespace-before-property": "warn",
			"@stylistic/js/nonblock-statement-body-position": "warn",
			"@stylistic/js/object-curly-newline": "warn",
			"@stylistic/js/object-curly-spacing": ["warn", "always"],
			"@stylistic/js/operator-linebreak": ["warn", "after", {
				overrides: {
					"?": "ignore",
					":": "ignore",
					"||": "ignore",
					"&&": "ignore"
				}
			}],
			"@stylistic/js/padding-line-between-statements": [
				"warn",
				{ blankLine: "always", prev: "default", next: "*" },
				{ blankLine: "always", prev: "*", next: "switch" }
			],
			"@stylistic/js/quote-props": ["warn", "consistent-as-needed"],
			"@stylistic/js/quotes": ["warn", "double"],
			"@stylistic/js/rest-spread-spacing": "warn",
			"@stylistic/js/semi": "warn",
			"@stylistic/js/semi-spacing": "warn",
			"@stylistic/js/semi-style": "warn",
			"@stylistic/js/space-before-blocks": "warn",
			"@stylistic/js/space-before-function-paren": ["warn", {
				anonymous: "always",
				named: "never",
				asyncArrow: "always"
			}],
			"@stylistic/js/space-in-parens": "warn",
			"@stylistic/js/space-infix-ops": "warn",
			"@stylistic/js/space-unary-ops": "warn",
			"@stylistic/js/spaced-comment": "warn",
			"@stylistic/js/template-curly-spacing": "warn"
		}
	},
	{
		ignores: [".yarn/"]
	}
];