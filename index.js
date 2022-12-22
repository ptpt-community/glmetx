const analyzer = require ("./compute.js");

function processStatisticalData(computed) {
	let paths  = computed.paths;
	let totalSize = 0;
	let variance = 0;
	paths.forEach(path => {totalSize += path});
	let mean = totalSize/paths.length;
	paths.forEach(path => {variance += (mean-path)**2});
	computed.pathSizeVariance = variance;
	computed.standardDaviation = variance**.5;
	return computed;

}

( main = () => {

	const rawInputs = process.argv;
	const inputs = [rawInputs[rawInputs.length-1]];

	const  ast = require("./ast.js")(inputs[0]);
	let analyzed = analyzer.analyse(ast);
	
	console.log (JSON.stringify(processStatisticalData(analyzed)));

	
}
)();
