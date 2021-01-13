//client connection module

//snake client!!
const net = require('net');

/**
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    //host: '10.0.2.15',
    port: 50542
    //port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', (data) => {
    console.log('Connekted.');
    conn.write('Name: M0B');
  });

  return conn;
};

module.exports = {connect};