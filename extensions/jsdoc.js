module.exports = {
	plugins: [
		"jsdoc"
	],
	extends: [
		"plugin:jsdoc/recommended"
	],
	rules: {
		"jsdoc/require-template": "warn",
		"jsdoc/check-template-names": "warn",
		"jsdoc/require-returns": "off",
		"jsdoc/require-jsdoc": "off",
		"jsdoc/check-param-names": "warn",
		"jsdoc/check-indentation": ["warn", { excludeTags: ["import", "example"] }],
		"jsdoc/no-bad-blocks": "warn",
		"jsdoc/tag-lines": ["warn", "never"],
		"jsdoc/no-defaults": "off",
		"jsdoc/require-hyphen-before-param-description": ["warn", "always", {
			tags: {
				property: "always",
				template: "always",
				return: "never"
			}
		}],
		"jsdoc/check-line-alignment": ["warn", "never"],
		"jsdoc/match-name": ["warn", {
			match: [
				{
					allowName: "/^_?([A-Z][a-z]+)+$/",
					message: "The name should be written in PascalCase.",
					tags: ["typedef"]
				},
				{
					allowName: "/^([A-Z][a-z]+)+$/",
					message: "The name should be written in PascalCase.",
					tags: ["callback"]
				},
				{
					allowName: "/^[A-Z]{1}$/",
					message: "The name should be a single capital letter.",
					tags: ["template"]
				}
			]
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
				},
				template: {
					message: "@template description should begin with a capital letter and not end with a period.",
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
				"object<>": false,
				"Object<>": "Record<>",
				"Object": "object",
				".<>": "<>",
				"*": "any"
			}
		}
	}
};