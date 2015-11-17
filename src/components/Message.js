import React, { Component } from 'react';
import { ListItem, Avatar } from 'material-ui';

export default class Message extends Component {
  render() {
    return (
      <ListItem
        leftAvatar={<Avatar src={this.props.message.profilePic} />}>
        {this.props.message.message}
      </ListItem>
    );
  }
}
