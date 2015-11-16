import React, { Component } from 'react';
import { ListItem } from 'material-ui';

export default class Channel extends Component {
  render() {
    return (
      <ListItem>
        {this.props.channel}
      </ListItem>
    );
  }
}
