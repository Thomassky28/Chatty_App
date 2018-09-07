// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const uuid = require('uuid');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });


// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connecteds');
  wss.broadcast(JSON.stringify({
    type: "number",
    number: wss.clients.size
  })

  )
console.log('clientnumber', wss.clients.size);

  ws.on('message', broadcastBack);
  ws.on('close', () => console.log('Client disconnected'));
});

wss.broadcast = function(data) {
    wss.clients.forEach(function(client){
      client.send(data);
    })
  }

function broadcastBack (message) {
  let parsed = JSON.parse(message);
  console.log('before', parsed)
  if (parsed.type === "postNotification") {
   parsed.type = "incomingNotification";
   console.log('after',parsed);
   wss.broadcast(JSON.stringify(parsed))

  } else {

  parsed.type = "incomingMessage"
  parsed.id = uuid();
  console.log('after',parsed);
  wss.broadcast(JSON.stringify(parsed));
  }
}



// wss.broadcast = function (data) {
//     wss.clients.forEach(function(client) {
//         client.send(data);
//     });
// };