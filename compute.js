let ops = require("./ops.js");

function compute(program){

 	let paths = [0];

	 if (program.body.statements === undefined) console.log (program);

	 program.body.statements.forEach(statement => {
		
		paths = ops.mergePaths(paths, [1]);
		 
		if (statement.type=="expression_statement") {
			
			if (statement.expression.right.type=="function_call"){
				
				let calledFunction = 
					statement.expression.right.
					identifier.specifier.identifier;

				let calledProgram = ops.findFunction(ast, calledFunction); 
				console.log("inner function found", calledFunction);
				
				if ( calledProgram !== null)
					paths = ops.mergePaths(paths, compute(calledProgram));
				
			}

			
		}
	       if (statement.type =="if_statement"){
			let ifPaths = ops.mergePaths(paths, compute(statement));
		        let elsePaths = paths;

		        if (statement.else !== undefined){
				if (statement.else[1].type === "compound_statement")
					elsePaths = ops.mergePaths(paths, compute({type: "else_statement", body: statement.else[1]}));
				else   {
					const elseIfProgram = {
						type: "else_if_stmt",
						body: {
							statements: [statement.else[1]]
						}
					};
					elsePaths = ops.mergePaths(paths, compute(elseIfProgram));
				}
			}

		        paths = paths.concat(ifPaths, elsePaths);


	       }	

	 });

	 return paths;

 }




