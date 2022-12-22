const analyzer = require ("./compute.js");

function processStatisticalData(computed) {
	let paths  = computed.paths;
	let squaredTotal= 0;
	paths.forEach(path => {squaredTotal += path*path});
	computed.pathSizeVariance = squaredTotal/paths.length;
	computed.standardDaviation = computed.pathSizeVariance**.5;
	return computed;

}

( main = () => {

	const rawInputs = process.argv;
	const inputs = [rawInputs[rawInputs.length-1]];

	const  ast = require("./ast.js")(inputs[0]);
	let analyzed = analyzer.analyse(ast);
	
	console.log (processStatisticalData(analyzed));
	
}
)();
