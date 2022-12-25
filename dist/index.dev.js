"use strict";

var analyzer = require("./compute.js");

function processStatisticalData(computed) {
  var paths = computed.paths;
  var totalSize = 0;
  var variance = 0;
  computed.numberOfPaths = paths.length;
  paths.forEach(function (path) {
    totalSize += path;
  });
  var mean = totalSize / paths.length;
  paths.forEach(function (path) {
    variance += Math.pow(mean - path, 2);
  });
  computed.pathSizeVariance = variance;
  computed.standardDaviation = Math.pow(variance, .5);
  return computed;
}

(main = function main() {
  var rawInputs = process.argv;
  var inputs = [rawInputs[rawInputs.length - 1]];

  var ast = require("./ast.js")(inputs[0]);

  var analyzed = analyzer.analyse(ast);
  console.log(JSON.stringify(processStatisticalData(analyzed)));
})();
//# sourceMappingURL=index.dev.js.map
