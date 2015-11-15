import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        'hi there how are you?',
        'I am fine, and you?'
      ]
    };
  }

  render() {
    const messageNodes = this.state.messages.map((message, idx) => {
      return (
        <div key={idx}>{message}</div>
      );
    });

    return (
      <div>{messageNodes}</div>
    );
  }
}