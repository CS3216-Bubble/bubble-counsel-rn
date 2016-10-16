import React, { Component } from 'react';
import { Platform, StyleSheet, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Header, Title, Footer, FooterTab, Tabs, Card, CardItem, Button, Icon, Text } from 'native-base';

import ProfileComponent from '../components/ProfileComponent';

export default class ProfileView extends Component {
  render() {

    return (
      <Container>
        <Header>
          <Title>Profile</Title>
        </Header>
        <Content>
          <ProfileComponent />
        </Content>
      </Container>

    );
  }
}
