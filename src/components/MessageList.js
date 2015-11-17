import React from 'react';
import Firebase from 'firebase';
import _ from 'lodash';

import Message from './Message';

import { Card, List } from 'material-ui';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: {}
    };

    this.firebaseRef = new Firebase('https://react-stack-token.firebaseio.com/messages/');
    this.firebaseRef.on("child_added", (msg) => {
      if (this.state.messages[msg.key()]) {
        return;
      }

      let msgVal = msg.val();
      msgVal.key = msg.key();
      this.state.messages[msgVal.key] = msgVal;
      this.setState({messages: this.state.messages});
    });
  }

  render() {
    const messageNodes = _.values(this.state.messages).map((message, idx) => {
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

export default MessageList;
