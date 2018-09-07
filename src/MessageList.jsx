import React from 'react';
import Message from './Message.jsx';

const MessageList = props => (


  <div className='messages'>
   { props.messages.map( (message, i) =>
      <Message

        key={i}
        username={message.username}
        content={message.content}
        type={message.type}/>

     )
    }
  </div>
)

export default MessageList;



