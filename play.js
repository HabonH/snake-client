// IP: 165.227.47.243 PORT: 50541 -- tells clients where to make the connection 
// const net = require("net");
const {connect} = require('./client')

// establishes a connection with the game server


console.log("Connecting ...");
connect();
