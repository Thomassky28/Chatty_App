import React, { Component } from 'react';

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

   const onSubmit2 = (evt) => {
      // evt.preventDefault();
      console.log('event')
      if (evt.key == 'Enter') {
      console.log('work')
      const nameInput = evt.target;
      this.props.addName(nameInput.value);

      // contentInput.value = '';

        }
  };



  return (

    <footer className="chatbar">
    <input /*defaultValue={this.props.currentUser} */onKeyPress={onSubmit2}
    className="chatbar-username" placeholder="Your Name (Optional)" />
    <input onKeyPress={onSubmit} name='content' className="chatbar-message" placeholder="Type a message and hit ENTER" />
  </footer>)

   }
};


export default ChatBar;