import React, { Component } from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';



// state.messages
const Data = {
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [
    { id: 1,
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    { id: 2,
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
    }
  ]
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          loading: true,
          currentUser: Data.currentUser.name,
          // messages: Data.messages
          messages: [],
          number: 0

        };
    }
    // console.log(Data.currentUser.name)

    addName = (userName) => {
      // console.log(content);

      const newMessage = { type: "postNotification", /*username: userName,*/ content: `${this.state.currentUser} change their name to ${userName}`}

      this.socket.send(JSON.stringify(newMessage));
    this.setState({currentUser: userName})

      // this.socket.send(JSON.stringify(newMessage));


    // Update the state of the app component.
    // Calling setState will trigger a call to render() in App and all child components.


    }

    addContent = (content) => {
      console.log(content);

      const newMessage = { type: "postMessage", username: this.state.currentUser, content: content}




      this.socket.send(JSON.stringify(newMessage));


    // Update the state of the app component.
    // Calling setState will trigger a call to render() in App and all child components.


    }

    componentDidMount() {
        console.log("loading successfully")
        setTimeout(() => {
            this.setState({ loading: false });
        }, 1000)


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

      console.log(e.data);
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
    //       console.log("componentDidMount <App />");
    //     setTimeout(() => {
    //       console.log("Simulating incoming message");

    //     Add a new message to the list of messages in the data store
    //     const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
    //     this.addContent()

    //    const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
    //    const messages = this.state.messages.concat(newMessage)


    // Update the state of the app component.
    // Calling setState will trigger a call to render() in App and all child components.
    // this.setState({messages: messages})

    //      }, 3000);


    }

    render() {
        if (this.state.loading) {
            return <h1 > Loading... </h1>
        } else {
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
}

/*<h1 > Hello React: ) </h1>*/

const NavBar = (props) => (

 <nav className="navbar">
  <a href="/" className="navbar-brand">Chatty</a>
  <h3 className="userNumber">{ props.userNumber } users online</h3>
 </nav>
);





  /* const messageList = props.messages.map((message) => {
    <Message {...message}/>
  });*/

  // const Message = (props) => (
  //  <div className="message">
  //   <span className="message-username">{ props.username}
  //   </span>
  //   <span className="message-content">{props.content}</span>
  //   </div>
  //   )






// const MessageList = props => (
//   <div className='messages'>
//    { props.messages.map( (message, i) =>
//     <Message
//        key={i}
//        username={message.username}
//        content={message.content} />

//   )}

// </div>

//   )





/*

class ChatBar extends Component {
  constructor(props) {
        super(props);
        // this.props.currentUser {'Data.currentUser.name'}
    }
 render() {

  const onSubmit = (evt) => {
      // evt.preventDefault();
      console.log('event')
      if (evt.key == 'Enter') {
      console.log('work')
      const contentInput = evt.target;
      this.props.addContent(contentInput.value);

      contentInput.value = '';

        }
  };
  return (

    <footer className="chatbar">
    <input defaultValue={this.props.currentUser} className="chatbar-username" placeholder="Your Name (Optional)" />
    <input onKeyPress={onSubmit} name='content' className="chatbar-message" placeholder="Type a message and hit ENTER" />
  </footer>)

   }
};
*/

export default App