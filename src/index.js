global.coverageData = global.coverageData || {};
global.coverageData['src/index.js'] = {
  functions: {
    '0': 0
  },
  lines: {
    '0': 0,
    '1': 0
  },
  branches: {
    // we have no branches here, but other code obviously could
  }
};

module.exports = function addTwoThings(x, y) {
  global.coverageData['src/index.js'].functions[0]++ ; 
  global.coverageData['src/index.js'].lines[0]++; const result = x + y;
  global.coverageData['src/index.js'].lines[1]++; return result;
};
