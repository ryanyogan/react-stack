import React from 'react';
import Message from './Message';
import { Card, List } from 'material-ui';

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
      <Card style={{
        flexGrow: 2,
        marginLeft: 30
      }}>
        <List>
          {messageNodes}
        </List>
      </Card>
    );
  }
}
