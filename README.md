Chatty App
=====================

### Project Description

Many of the web applications that you use today have real-time functionality where the user does not have to reload the page in order to see updates. Major examples of these include Slack, Twitter and Facebook.

My app, Chatty will allow users to communicate with each other without having to register accounts. It uses React, a popular front-end library created and used heavily by Facebook as well as modern tools for Node including Webpack and Babel.

### Functions

Primarily a client-side SPA (single-page app) built with ReactJS:

1. Based on the HTML and CSS provided.

2. Contains a chat log displaying messages and notifications.

3. Contains an input field to change your name and an input field to send a message.

The client-side app communicates with a server via WebSockets for multi-user real-time updates.

No persistent database is involved; the focus is on the client-side experience.


## Final Product

## Behaviour

* When any connected users enter their names, all connected users are notified the users' online state.

* When any connected user sends a chat message, all connected users receive and display the message.

!["user-talk"](https://github.com/Thomassky28/Chatty_App/blob/master/build/user-talk.gif)

!["communication"](https://github.com/Thomassky28/Chatty_App/blob/master/build/communication.gif)

* Header will display the count of connected users.

* When the number of connected users changes, this count will be updated for all connected users.

!["Three-users-talking"](https://github.com/Thomassky28/Chatty_App/blob/master/build/Three-users-talking.gif)



### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
