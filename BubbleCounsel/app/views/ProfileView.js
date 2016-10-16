import React, { Component } from 'react';
import { Platform, StyleSheet, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Header, Title, Footer, FooterTab, Tabs, Card, CardItem, Button, Icon, Text } from 'native-base';

import ProfileComponent from '../components/ProfileComponent';

export default class ProfileView extends Component {
  state = {
    user: {
      name: 'Counsellor Tan',
      imgSrc: 'https://www.dropbox.com/s/2fth5ceonfa3iww/group.png?raw=1',
      numThanks: 23,
      numCheers: 14
    }
  }

  render() {
    return (
      <Container>

        <Header iconRight>
          <Title>Profile</Title>

          <Button transparent>
              <Icon name='ios-compose' />
          </Button>
        </Header>


        <Content>
          <ProfileComponent user={this.state.user} />
        </Content>

      </Container>
    );
  }
}
