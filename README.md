Chatty App
=====================

### Project Description

Primarily a client-side application built with ReactJS. 
App communicates with a server via WebSockets for multi-user real-time updates.

1. Contains a chat log displaying messages and notifications.

2. Contains an input field to change your name and an input field to send a message.

## Getting Started 
1. Install all dependicies using the `npm install` command.
2. Start the client-side server in root directory using `npm start` command.
3. Start web server in "chatty-server" directory with `npm start` command.
4. Open http://localhost:3000 page in the browser as many as you want.

## Project Demo

## Behaviour

1. When any connected users stay online and enter their names, all other connected users will be notified.

2. When any connected user sends a chat message, all connected users receive and display the message.

!["user-talk"](https://github.com/Thomassky28/Chatty_App/blob/master/build/user-talk.gif)


!["communication"](https://github.com/Thomassky28/Chatty_App/blob/master/build/communication.gif)




3. Header will display the count of connected users.

4. When the number of connected users changes, this count will be updated for all connected users.

!["Three-users-talking"](https://github.com/Thomassky28/Chatty_App/blob/master/build/Three-users-talking.gif)



### Dependencies

* react
* react-dom
* ws
* uuid
* babel
* babel-preset-es2015
* babel-preset-react
* babel-loader
* sass-loader
* Webpack
* webpack-dev-server
