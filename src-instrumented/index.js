var cov_1x7qu2dgv9 = function() {
  var path = "/Users/bremeva/Documents/projects/js-mn-istanbuljs/src/index.js";
  var hash = "e24dcf6642398b8eaa1a01c574af988e932d05ed";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
      path: "/Users/bremeva/Documents/projects/js-mn-istanbuljs/src/index.js",
      statementMap: {
          "0": {
              start: {
                  line: 1,
                  column: 0
              },
              end: {
                  line: 4,
                  column: 2
              }
          },
          "1": {
              start: {
                  line: 2,
                  column: 17
              },
              end: {
                  line: 2,
                  column: 22
              }
          },
          "2": {
              start: {
                  line: 3,
                  column: 2
              },
              end: {
                  line: 3,
                  column: 16
              }
          }
      },
      fnMap: {
          "0": {
              name: "addTwoThings",
              decl: {
                  start: {
                      line: 1,
                      column: 26
                  },
                  end: {
                      line: 1,
                      column: 38
                  }
              },
              loc: {
                  start: {
                      line: 1,
                      column: 45
                  },
                  end: {
                      line: 4,
                      column: 1
                  }
              },
              line: 1
          }
      },
      branchMap: {},
      s: {
          "0": 0,
          "1": 0,
          "2": 0
      },
      f: {
          "0": 0
      },
      b: {},
      _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
      hash: "e24dcf6642398b8eaa1a01c574af988e932d05ed"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
  }
  return coverage[path] = coverageData;
}();
cov_1x7qu2dgv9.s[0]++;
module.exports = function addTwoThings(x, y) {
  cov_1x7qu2dgv9.f[0]++;
  const result = (cov_1x7qu2dgv9.s[1]++, x + y);
  cov_1x7qu2dgv9.s[2]++;
  return result;
};