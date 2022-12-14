const { parser, generate } = require('@shaderfrog/glsl-parser');
const fs = require("fs");

// To parse a GLSL program's source code into an AST:
//const ast = parser.parse('float a = 1.0;');
// To turn a parsed AST back into a source program
//const program = generate(ast);

const constructFilePath = (input) => {
	return filePath = __dirname + '/' + input;
}
const readFile = (filePath) => {
	return fs.readFileSync(filePath, {
		encoding: 'utf-8',
		flag: 'r'
	});
}

const getAst = (input) => {
	const filePath = constructFilePath(input);
	const file = readFile(filePath);
//	console.log(file);
	return parser.parse(file);
}

( constructor = () => {
	module.exports = (shader) => {
		return getAst(shader);
	}	
}
)();
