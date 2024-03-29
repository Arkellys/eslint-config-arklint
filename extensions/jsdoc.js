module.exports = {
	plugins: [
		"jsdoc"
	],
	extends: [
		"plugin:jsdoc/recommended"
	],
	rules: {
		"jsdoc/require-returns": "off",
		"jsdoc/require-jsdoc": "off",
		"jsdoc/check-param-names": "warn",
		"jsdoc/check-indentation": "warn",
		"jsdoc/no-bad-blocks": "warn",
		"jsdoc/tag-lines": ["warn", "never"],
		"jsdoc/no-defaults": "off",
		"jsdoc/require-hyphen-before-param-description": ["warn", "always", {
			tags: {
				property: "always",
				return: "never"
			}
		}],
		"jsdoc/check-line-alignment": ["warn", "never"],
		"jsdoc/match-name": ["warn", {
			match: [{
				allowName: "/^([A-Z][a-z]+)+$/",
				message: "The name should be written in PascalCase.",
				tags: ["callback", "typedef"]
			}]
		}],
		"jsdoc/match-description": ["warn", {
			contexts: ["any"],
			mainDescription: {
				message: "The main description should be written in the third person, begin with a capital letter and end with a period.",
				match: "/^[A-Z][.^\\w]*s\\b.*\\.$/us"
			},
			matchDescription: "^[A-Z].*[^\\.]$",
			tags: {
				param: {
					message: "@param description should begin with a capital letter and not end with a period.",
					match: true
				},
				property: {
					message: "@property description should begin with a capital letter and not end with a period.",
					match: true
				},
				returns: {
					message: "@returns description should begin with a capital letter and not end with a period.",
					match: true
				}
			}
		}]
	},
	settings: {
		jsdoc: {
			maxLines: 2,
			mode: "typescript",
			preferredTypes: {
				"object.<>": false,
				"Object": "object",
				"<>": ".<>",
				"*": "any"
			}
		}
	}
};