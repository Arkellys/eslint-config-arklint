require("@rushstack/eslint-patch/modern-module-resolution");
const restrictedGlobals = require("confusing-browser-globals");


module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true
	},
	parserOptions: {
		ecmaVersion: 2023
	},
	ignorePatterns: ["node_modules/"],
	extends: [
		"eslint:recommended",
		"./extensions/import.js",
		"./extensions/jsdoc.js"
	],
	rules: {
		"array-bracket-spacing": "warn",
		"array-callback-return": "warn",
		"arrow-body-style": "warn",
		"camelcase": "warn",
		"comma-dangle": ["warn", "never"],
		"comma-spacing": "warn",
		"default-case": ["warn", { commentPattern: "^no default$" }],
		"dot-location": ["warn", "property"],
		"dot-notation": "warn",
		"eol-last": ["warn", "never"],
		"eqeqeq": ["warn", "smart"],
		"getter-return": "warn",
		"indent": ["warn", "tab", { SwitchCase: 1, ignoreComments: true }],
		"new-parens": "warn",
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
		"no-labels": ["warn", { allowLoop: true, allowSwitch: false }],
		"no-lone-blocks": "warn",
		"no-loop-func": "warn",
		"no-mixed-operators": "warn",
		"no-multi-spaces": "warn",
		"no-multi-str": "warn",
		"no-multiple-empty-lines": ["warn", { max: 2, maxBOF: 0, maxEOF: 0 }],
		"no-new-func": "warn",
		"no-new-object": "warn",
		"no-new-symbol": "warn",
		"no-new-wrappers": "warn",
		"no-obj-calls": "warn",
		"no-octal-escape": "warn",
		"no-octal": "warn",
		"no-redeclare": "warn",
		"no-regex-spaces": "warn",
		"no-restricted-globals": ["error"].concat(restrictedGlobals),
		"no-restricted-syntax": ["warn", "WithStatement"],
		"no-script-url": "warn",
		"no-self-assign": "warn",
		"no-self-compare": "warn",
		"no-sequences": "warn",
		"no-shadow-restricted-names": "warn",
		"no-sparse-arrays": "warn",
		"no-template-curly-in-string": "warn",
		"no-this-before-super": "warn",
		"no-throw-literal": "warn",
		"no-undef": "error",
		"no-unreachable": "warn",
		"no-unsafe-negation": "warn",
		"no-unused-expressions": ["error", {
			allowShortCircuit: true,
			allowTernary: true,
			allowTaggedTemplates: true
		}],
		"no-unused-labels": "warn",
		"no-unused-vars": "warn",
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
		"no-whitespace-before-property": "warn",
		"no-with": "warn",
		"nonblock-statement-body-position": "warn",
		"object-curly-spacing": ["warn", "always"],
		"object-shorthand": ["warn", "always"],
		"prefer-arrow-callback": "warn",
		"quote-props": ["warn", "consistent-as-needed"],
		"quotes": ["warn", "double"],
		"require-await": "warn",
		"require-yield": "warn",
		"rest-spread-spacing": ["warn", "never"],
		"semi": "warn",
		"space-in-parens": "warn",
		"space-infix-ops": "warn",
		"spaced-comment": ["warn", "always"],
		"strict": ["warn", "never"],
		"unicode-bom": ["warn", "never"],
		"use-isnan": "warn",
		"valid-typeof": "warn"
	}
};