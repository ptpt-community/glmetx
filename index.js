const { parser, generate } = require('@shaderfrog/glsl-parser');

// To parse a GLSL program's source code into an AST:
const ast = parser.parse('float a = 1.0;');

// To turn a parsed AST back into a source program
const program = generate(ast);
