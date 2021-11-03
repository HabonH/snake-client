const { console } = require("console");
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541 // PORT number here,
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    conn.write("Name: Hab");
    console.log("Successfully connected to game server")  
    conn.write("Move: up")
    conn.write("Move: down")
    conn.write("Move: left")
    conn.write("Move: right")
  });
  return conn;
};
connect();

module.exports = {connect};

