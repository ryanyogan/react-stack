import React from 'react';
import Message from './Message';

export default class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        'hey there how are you?',
        'I am fine, and you?'
      ]
    };
  }

  render() {
    const messageNodes = this.state.messages.map((message, idx) => {
      return (
        <Message key={idx} message={message} />
      );
    });

    return (
      <div>{messageNodes}</div>
    );
  }
}
