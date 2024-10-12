import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactPlugin from "eslint-plugin-react";


export default [
	reactPlugin.configs.flat.recommended,
	reactPlugin.configs.flat["jsx-runtime"],
	{
		plugins: {
			"react": reactPlugin,
			"react-hooks": reactHooksPlugin,
			"jsx-a11y": jsxA11yPlugin
		},
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				},
				babelOptions: {
					presets: ["@babel/preset-react"]
				}
			}
		},
		settings: {
			react: {
				version: "detect"
			}
		},
		rules: {
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
			"jsx-a11y/scope": "warn",
			"react/display-name": "warn",
			"react-hooks/exhaustive-deps": "warn",
			"react-hooks/rules-of-hooks": "error",
			"react/jsx-curly-brace-presence": "warn",
			"react/jsx-first-prop-new-line": ["warn", "multiline"],
			"react/jsx-fragments": ["warn", "element"],
			"react/jsx-key": "warn",
			"react/jsx-max-props-per-line": ["warn", { maximum: { single: 3, multi: 1 } }],
			"react/jsx-no-comment-textnodes": "warn",
			"react/jsx-no-duplicate-props": "warn",
			"react/jsx-no-target-blank": "warn",
			"react/jsx-no-undef": "error",
			"react/jsx-pascal-case": "warn",
			"react/jsx-tag-spacing": ["warn", {
				closingSlash: "never",
				beforeSelfClosing: "always",
				afterOpening: "never",
				beforeClosing: "never"
			}],
			"react/jsx-uses-react": "warn",
			"react/jsx-uses-vars": "warn",
			"react/jsx-boolean-value": ["warn", "never"],
			"react/jsx-closing-bracket-location": "warn",
			"react/jsx-wrap-multilines": "warn",
			"react/jsx-props-no-spread-multi": "warn",
			"react/no-danger-with-children": "warn",
			"react/no-direct-mutation-state": "warn",
			"react/no-is-mounted": "warn",
			"react/prop-types": "off",
			"react/require-render-return": "error",
			"react/style-prop-object": "warn"
		}
	}
];