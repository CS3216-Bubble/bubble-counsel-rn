import React, { Component } from 'react';
import { Container, Content, Header, Title, Tabs } from 'native-base';

import IssueListComponent from '../components/IssueListComponent';
import ChatListComponent from '../components/ChatListComponent';
import ProfileComponent from '../components/ProfileComponent';

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
            <ChatListComponent tabLabel='Chats' />
            <ProfileComponent tabLabel='Profile' />
          </Tabs>
        </Content>
      </Container>
    );
  }
}
