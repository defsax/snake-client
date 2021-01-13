//client connection module
/*
 * Establishes connection with the game server
*/

//snake client!!
const net = require('net');
const { NAME } = require('./constants.js');
const { IP, PORT } = require('./constants.js');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', (data) => {
    console.log('Connekted.');
    conn.write(NAME);
    //conn.write('Move: up');
  });

  //setInterval(() => conn.write('Move: up'), 100);

  return conn;
};

module.exports = {connect};