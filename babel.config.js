export default {
	plugins: [
		["transform-import-extension", { mjs: "cjs" }],
		"babel-plugin-transform-esm-to-cjs"
	]
};