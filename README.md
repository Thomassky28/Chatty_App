Chatty App
=====================

A minimal and light dev environment for ReactJS.

### Project Description

Many of the web applications that you use today have real-time functionality where the user does not have to reload the page in order to see updates. Major examples of these include Slack, Twitter and Facebook.

My app, Chatty will allow users to communicate with each other without having to register accounts. It uses React, a popular front-end library created and used heavily by Facebook as well as modern tools for Node including Webpack and Babel.

###Functions

Primarily a client-side SPA (single-page app) built with ReactJS
Based on the HTML and CSS provided
Contains a chat log displaying messages and notifications
Contains an input field to change your name and an input field to send a message
The client-side app communicates with a server via WebSockets for multi-user real-time updates
No persistent database is involved; the focus is on the client-side experience

### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.

## Final Product

!["screenshot update page"]()

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
