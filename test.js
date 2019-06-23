const { sync } = require('glob');

// discover all the test files
sync('./src/**/*.test.js').forEach(filePath => {

  // execute the tests
  require(filePath);
});

// if we made it this far without an error, we know it worked!
console.log('all tests pass!');
