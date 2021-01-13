const { MOVE_KEYS, MSGS } = require('./constants.js');

// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
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

  //MOVEMENT
  if (key === MOVE_KEYS.up)
    connection.write('Move: up');
  if (key === MOVE_KEYS.down)
    connection.write('Move: down');
  if (key === MOVE_KEYS.left)
    connection.write('Move: left');
  if (key === MOVE_KEYS.right)
    connection.write('Move: right');

  //MESSAGES
  if (key === '`') {
    connection.write(MSGS['1']);
  }
  if (key === '1') {
    connection.write(MSGS['2']);
  }
  if (key === '2') {
    connection.write(MSGS['3']);
  }
  if (key === '3') {
    connection.write(MSGS['4']);
  }
};

module.exports = { setupInput };