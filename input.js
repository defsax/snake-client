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
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }

  //MESSAGES
  if (key === '`') {
    connection.write('Say: SUPPPPPP!');
  }

  if (key === '1') {
    connection.write('Say: i eat!');
  }
  if (key === '2') {
    connection.write('Say: yum');
  }
};

module.exports = { setupInput };