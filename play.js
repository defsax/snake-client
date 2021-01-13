//play.js

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.stdout.write('\nQuitting Game!\n');
    process.exit();
  }
};

const { connect } = require('./client.js');
console.log('Connecting ...');
setupInput();
connect();
