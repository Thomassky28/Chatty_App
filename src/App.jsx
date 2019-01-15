import React, { Component } from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
import NavBar from './NavBar.jsx';





class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          loading: true,
          currentUser: "User",
          messages: [],
          number: 0

        };
        this.addName = this.addName.bind(this);
        this.addContent = this.addContent.bind(this);
    }


    addName = (userName) => {

      const newMessage = {
                           type: "postNotification",
                           content: `${userName} online!`
                         }

      this.socket.send(JSON.stringify(newMessage));
      this.setState({currentUser: userName})
    }

    addContent = (content) => {
      console.log(content);
      const newMessage = { type: "postMessage", username: this.state.currentUser, content: content}
      this.socket.send(JSON.stringify(newMessage));
    }

    componentDidMount() {
      console.log("loading successfully")

      // setTimeout(() => {
      //       this.setState({ loading: false });
      // }, 1000)


      this.socket = new WebSocket("ws://localhost:3001");
      console.log('connect to server')
      // exampleSocket.send("Here's some text that the server is urgently awaiting!");
      this.socket.onopen = (e) => {
        console.log('Client connected to server.')
        this.socket.send(JSON.stringify({
          message: "Here's some text that the server is urgently awaiting!"
        }));
      };

      this.socket.onmessage = (e) => {
        console.log('client', e.data);
        let parsed = JSON.parse(e.data);
        console.log(parsed);
        const oldMessages = this.state.messages;


        const messages = [...oldMessages, parsed];
         // this.state.messages.push(e.data);
        switch(parsed.type) {
          case "incomingMessage":
            this.setState({messages: messages})
              break;

          case "incomingNotification":
            this.setState({messages: messages})
            break;

           case "number":
            this.setState({number:parsed.number})
          default:

             throw new Error("Unknown event type " + parsed.type);
        }
      }



    }

    render() {

            return (
                <div>
                  <NavBar
                  userNumber={this.state.number}
                  />
                  <MessageList
                    messages={this.state.messages}
                  />
                  <ChatBar
                    /*currentUser={this.state.currentUser}*/
                    addName={this.addName}
                    addContent={this.addContent}


                  />
                </div>
            )

    }
}


export default App









