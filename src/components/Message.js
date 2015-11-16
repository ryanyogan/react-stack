import React, { Component } from 'react';
import { ListItem, Avatar } from 'material-ui';

export default class Message extends Component {
  render() {
    return (
      <ListItem
        leftAvatar={<Avatar src="https://s.gravatar.com/avatar/f44f6ea59d431945e63ea87e232c8217?s=80" />}>
        {this.props.message}
      </ListItem>
    );
  }
}
