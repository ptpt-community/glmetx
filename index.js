const scopes_ast = {};

const scopify = (ast) => {
	
}


function findFunction (ast, name) {
	let functionTree = {};
	ast.program.forEach( p => {
		if (p.type === "function") {
			let fName = p.prototype.header.name.identifier;
			if (fName === name) {
				functionTree = p;
				return;
			}

		
		}
	} );

	return functionTree;
}

( main = () => {

	const rawInputs = process.argv;
	const inputs = [rawInputs[rawInputs.length-2], rawInputs[rawInputs.length-1]];

	const vast = require("./ast.js")(inputs[0]);
	const fast = require("./ast.js")(inputs[1]);
	
	scopify();
	
	console.log(vast, fast);
}
)();
