require("@rushstack/eslint-patch/modern-module-resolution");


module.exports = {
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},
	settings: {
		react: {
			version: "detect"
		}
	},
	plugins: [
		"react",
		"react-hooks",
		"jsx-a11y"
	],
	extends: [
		"plugin:react/recommended",
		"plugin:react/jsx-runtime"
	],
	rules: {
		"react/no-typos": "error",
		"react/prop-types": ["warn", { ignore: ["t"] }],
		"react/display-name": "warn",
		"react/jsx-fragments": ["warn", "element"],
		"react/jsx-key": "warn",
		"react/jsx-first-prop-new-line": ["warn", "multiline"],
		"react/jsx-max-props-per-line": ["warn", { maximum: { single: 3, multi: 1 } }],
		"react/jsx-wrap-multilines": "warn",
		"react/jsx-boolean-value": ["warn", "never"],
		"react/jsx-closing-bracket-location": "warn",
		"react/jsx-no-duplicate-props": "warn",
		"react/jsx-curly-brace-presence": "warn",
		"react/jsx-uses-vars": "warn",
		"react/jsx-uses-react": "warn",
		"react/forbid-foreign-prop-types": ["warn", { allowInPropTypes: true }],
		"react/jsx-no-comment-textnodes": "warn",
		"react-hooks/exhaustive-deps": "warn",
		"react/jsx-no-target-blank": "warn",
		"react/jsx-no-undef": "error",
		"react/jsx-pascal-case": "warn",
		"react/no-danger-with-children": "warn",
		"react/no-direct-mutation-state": "warn",
		"react/no-is-mounted": "warn",
		"react/require-render-return": "error",
		"react-hooks/rules-of-hooks": "error",
		"react/style-prop-object": "warn",
		"jsx-a11y/alt-text": "warn",
		"jsx-a11y/anchor-has-content": "warn",
		"jsx-a11y/anchor-is-valid": ["warn", {
			aspects: ["noHref", "invalidHref"]
		}],
		"jsx-a11y/aria-activedescendant-has-tabindex": "warn",
		"jsx-a11y/aria-props": "warn",
		"jsx-a11y/aria-proptypes": "warn",
		"jsx-a11y/aria-role": ["warn", { ignoreNonDOM: true }],
		"jsx-a11y/aria-unsupported-elements": "warn",
		"jsx-a11y/heading-has-content": "warn",
		"jsx-a11y/iframe-has-title": "warn",
		"jsx-a11y/img-redundant-alt": "warn",
		"jsx-a11y/no-access-key": "warn",
		"jsx-a11y/no-distracting-elements": "warn",
		"jsx-a11y/no-redundant-roles": "warn",
		"jsx-a11y/role-has-required-aria-props": "warn",
		"jsx-a11y/role-supports-aria-props": "warn",
		"jsx-a11y/scope": "warn"
	}
};