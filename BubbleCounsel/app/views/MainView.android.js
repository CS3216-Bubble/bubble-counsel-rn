import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Header, Title, Footer, FooterTab, Tabs, Card, CardItem, Button, Icon, Text } from 'native-base';

import IssueListComponent from '../components/IssueListComponent';
import ChatListView from './ChatListView';
import ProfileView from './ProfileView';

export default class MainView extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Title>Issues</Title>
        </Header>
        <Content>
          <Tabs>
            <IssueListComponent tabLabel='Issues' />
            <ChatListView tabLabel='Chats' />
            <ProfileView tabLabel='Profile' />
          </Tabs>
        </Content>
      </Container>
    );
  }
}
