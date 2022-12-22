let ops = require("./ops.js");

let results = {cyclomaticComplexity: 0};

function branchPaths(paths1, paths2, isBranch=0) {
	console.log(isBranch, results.cyclomaticComplexity);

	results.cyclomaticComplexity += (1*isBranch);

	return ops.mergePaths(paths1, paths2);

}


function max (a, b) {
	return a > b ? a : b;
}

function compute(program){

 	let paths = [0];
	let nestDepth = 0;
	let computed = {};

	 if (program.body.statements === undefined) console.log (program);

	 program.body.statements.forEach(statement => {
		
		paths = branchPaths(paths, [1]);
		 
		if (statement.type=="expression_statement") {
			
			if (statement.expression.right.type=="function_call"){
				
				let calledFunction = 
					statement.expression.right.
					identifier.specifier.identifier;

				let calledProgram = ops.findFunction(ast, calledFunction); 
				console.log("inner function found", calledFunction);
				
				if ( calledProgram !== null)
				{
					computed = compute(calledProgram);
					paths = branchPaths(paths, computed.paths);
				}
			}

			
		}
	       if (statement.type =="if_statement"){
			let ifPaths = branchPaths(paths, compute(statement).paths, 1);
		        let elsePaths = paths;

		        if (statement.else !== undefined){
				if (statement.else[1].type === "compound_statement")
				{
					computed =compute({type: "else_statement", body: statement.else[1]}); 
					nestDepth = max(computed.nestDepth, nestDepth);
					elsePaths = branchPaths(paths, computed.paths   );
				}
				else   {
					const elseIfProgram = {
						type: "else_if_stmt",
						body: {
							statements: [statement.else[1]]
						}
					};

					computed = compute(elseIfProgram);
					nestDepth = max(computed.nestDepth, nestDepth);
					elsePaths = branchPaths(paths, computed.paths);
				}
			}

		        paths = paths.concat(ifPaths, elsePaths);


	       }	

	 });

	nestDepth++;

	 return {paths, nestDepth};

 }




