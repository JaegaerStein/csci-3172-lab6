module.exports = {
    require: ['jsdom-global/register'], // Set up jsdom globally
    extension: ['js'], // Look for .js files
    spec: 'src/**/*.test.js', // Test files location
    timeout: 5000, // Timeout for tests
  };