// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const uuid = require('uuid');
const PORT = 3001;


const server = express()
    .use(express.static('public'))
    .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server });

wss.on('connection', (ws) => {
    // console.log('Client connecteds');
    wss.broadcast(JSON.stringify({
            type: "number",
            number: wss.clients.size
        })

    )

    ws.on('message', broadcastBack);

    ws.on('close', () => {
        console.log('Client disconnected');
        wss.broadcast(JSON.stringify({
            type: "number",
            number: wss.clients.size
        }));
    });
});

wss.broadcast = function(data) {
    wss.clients.forEach(function(client) {
        client.send(data);
    })
}

function broadcastBack(message) {
    let parsed = JSON.parse(message);
    console.log('before', parsed)
    if (parsed.type === "postNotification") {
        parsed.type = "incomingNotification";
        console.log('after', parsed);
        wss.broadcast(JSON.stringify(parsed))

    } else {

        parsed.type = "incomingMessage"
        parsed.id = uuid();
        console.log('after', parsed);
        wss.broadcast(JSON.stringify(parsed));
    }
}