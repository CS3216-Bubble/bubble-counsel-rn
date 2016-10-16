import React, { Component, PropTypes } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem, Thumbnail, Text, Icon, Button } from 'native-base';

export default class ProfileComponent extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  }

  render() {
    return (
      <ScrollView>
        <List>
          <ListItem>
            <Thumbnail square size={80} source={{uri: this.props.user.imgSrc}} />
            <Text>{this.props.user.name}</Text>
          </ListItem>
          <ListItem>
            <Button block info>Invite a Counsellor</Button>
          </ListItem>
          <ListItem>
            <Button block danger>Logout</Button>
          </ListItem>
        </List>
      </ScrollView>
    );
  }
}
