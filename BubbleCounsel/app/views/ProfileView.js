import React, { Component } from 'react';
import { Platform, StyleSheet, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Header, Title, Footer, FooterTab, Tabs, Card, CardItem, Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

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

          <Button transparent onPress={() => Actions.profileForm({user: this.state.user})}>
              <Icon size={30} name='ios-create-outline' color="#0E7AFE"/>
          </Button>
        </Header>


        <Content>
          <ProfileComponent user={this.state.user} />
        </Content>

      </Container>
    );
  }
}
