// Default generator when called 'yo ankit'
var generators = require('yeoman-generator'),
    say = require('yosay');

// Extend Base Generator for adding most of the functionality
module.exports = generators.Base.extend({

  // Some generator methods can be called inside constructor fnction only like setting up important state controls.
  constructor: function() {

    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);

    // The you can add your custom code
    this.log(say('Hello, welcome to Ankit!'));
    this.option('coffee'); // This method adds support for a `--coffee` flag
  },

  // Methods added to prototype are run in sequence once generator is called.
  method1: function () {
    console.log('method 1 just ran');
  },

  method2: function () {
    console.log('method 2 just ran');
  }

});