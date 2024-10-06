const arklintConfig = require("./index.js");
const importConfig = require("./extensions/import.js");
const jsdocConfig = require("./extensions/jsdoc.js");


module.exports = [
	...arklintConfig,
	...importConfig,
	...jsdocConfig
];