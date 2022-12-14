

( main = () => {

	const rawInputs = process.argv;
	const inputs = [rawInputs[rawInputs.length-2], rawInputs[rawInputs.length-1]];

	const vast = require("./ast.js")(inputs[0]);
	const fast = require("./ast.js")(inputs[1]);

	console.log(vast, fast);
}
)();
