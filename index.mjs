import babelParser from "@babel/eslint-parser";
import js from "@eslint/js";
import stylisticPlugin from "@stylistic/eslint-plugin";
import globals from "globals";


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
			"@stylistic": stylisticPlugin
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
			"@stylistic/array-bracket-newline": ["warn", "consistent"],
			"@stylistic/array-bracket-spacing": "warn",
			"@stylistic/array-element-newline": ["warn", "consistent"],
			"@stylistic/arrow-parens": "warn",
			"@stylistic/arrow-spacing": "warn",
			"@stylistic/block-spacing": "warn",
			"@stylistic/brace-style": ["warn", "1tbs", {
				allowSingleLine: true
			}],
			"@stylistic/comma-dangle": ["warn", "never"],
			"@stylistic/comma-spacing": "warn",
			"@stylistic/comma-style": "warn",
			"@stylistic/computed-property-spacing": "warn",
			"@stylistic/dot-location": ["warn", "property"],
			"@stylistic/eol-last": ["warn", "never"],
			"@stylistic/function-call-spacing": "warn",
			"@stylistic/function-call-argument-newline": ["warn", "consistent"],
			"@stylistic/function-paren-newline": ["warn", "consistent"],
			"@stylistic/implicit-arrow-linebreak": "warn",
			"@stylistic/indent": ["warn", "tab", {
				SwitchCase: 1,
				ignoreComments: true
			}],
			"@stylistic/key-spacing": "warn",
			"@stylistic/keyword-spacing": "warn",
			"@stylistic/new-parens": "warn",
			"@stylistic/no-confusing-arrow": "warn",
			"@stylistic/no-extra-semi": "warn",
			"@stylistic/no-floating-decimal": "warn",
			"@stylistic/no-mixed-operators": "warn",
			"@stylistic/no-multi-spaces": "warn",
			"@stylistic/no-multiple-empty-lines": ["warn", {
				max: 2,
				maxBOF: 0,
				maxEOF: 0
			}],
			"@stylistic/no-trailing-spaces": "warn",
			"@stylistic/no-whitespace-before-property": "warn",
			"@stylistic/nonblock-statement-body-position": "warn",
			"@stylistic/object-curly-newline": "warn",
			"@stylistic/object-curly-spacing": ["warn", "always"],
			"@stylistic/operator-linebreak": ["warn", "after", {
				overrides: {
					"?": "ignore",
					":": "ignore",
					"||": "ignore",
					"&&": "ignore"
				}
			}],
			"@stylistic/padding-line-between-statements": [
				"warn",
				{ blankLine: "always", prev: "default", next: "*" },
				{ blankLine: "always", prev: "*", next: "switch" }
			],
			"@stylistic/quote-props": ["warn", "consistent-as-needed"],
			"@stylistic/quotes": ["warn", "double"],
			"@stylistic/rest-spread-spacing": "warn",
			"@stylistic/semi": "warn",
			"@stylistic/semi-spacing": "warn",
			"@stylistic/semi-style": "warn",
			"@stylistic/space-before-blocks": "warn",
			"@stylistic/space-before-function-paren": ["warn", {
				anonymous: "always",
				named: "never",
				asyncArrow: "always"
			}],
			"@stylistic/space-in-parens": "warn",
			"@stylistic/space-infix-ops": "warn",
			"@stylistic/space-unary-ops": "warn",
			"@stylistic/spaced-comment": "warn",
			"@stylistic/template-curly-spacing": "warn"
		}
	},
	{
		ignores: [".yarn/"]
	}
];