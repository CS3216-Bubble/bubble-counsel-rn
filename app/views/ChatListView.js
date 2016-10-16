import React, { Component } from 'react';
import { Platform, StyleSheet, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Header, Title, Footer, FooterTab, Tabs, Card, CardItem, Button, Icon, Text } from 'native-base';

import ChatListComponent from '../components/ChatListComponent';

export default class ChatListView extends Component {
  render() {

    return (
      <Container>
        <Header>
          <Title>Chats</Title>
        </Header>
        <Content>
          <ChatListComponent />
        </Content>
      </Container>
    );
  }
}
