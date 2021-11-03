// IP: 165.227.47.243 PORT: 50541 -- tells clients where to make the connection 
// const net = require("net");
const {connect} = require('./client')

// establishes a connection with the game server
console.log("Connecting ...");

// setup interface to handle user input from stdin

const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  }
};
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

handleUserInput(data);
setupInput();

