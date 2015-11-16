import React from 'react';
import Channel from './Channel';
import { Card, List } from 'material-ui';

export default class ChannelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [
        'Dogs',
        'Cats'
      ]
    };
  }

  render() {
    const channelNodes = this.state.channels.map((channel, idx) => {
      return (
        <Channel key={idx} channel={channel} />
      );
    });

    return (
      <Card style={{flexGrow: 1}}>
        <List>
          {channelNodes}
        </List>
      </Card>
    );
  }
}
