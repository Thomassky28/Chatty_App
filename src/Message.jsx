import React from 'react';



const Message = (props) => {
  if (props.type === "incomingNotification") {
    return (
      <div className="notification">
        <span className="notification-content">{ props.content}</span>
      </div>
    )
  } else {
    return (
      <div className="message">
        <span className="message-username">{ props.username}</span>
        <span className="message-content">{ props.content }</span>
      </div>
   )


  }
}

export default Message;