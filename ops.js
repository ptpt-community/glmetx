function findFunction (ast, name) {
	let functionTree = null;
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

function mergePaths(paths1, paths2) {
	let newPaths = [];
	paths1.forEach(path1 => {
		paths2.forEach(path2 => {
			newPaths.push(path1+path2);

		});

	});

	return newPaths;
}





module.exports = {
	findFunction,
	mergePaths
}
