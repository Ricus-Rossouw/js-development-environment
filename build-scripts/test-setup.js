// This file does not get transpiled, use ES5
// Register babel to transpile before running tests
require('babel-register');

// Disable webpack features that mocha does not understand
require.extensions['.css'] = function() {};
