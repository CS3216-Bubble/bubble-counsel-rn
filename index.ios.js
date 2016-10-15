/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, } from 'native-base';
import IssueListView from './app/views/IssueListView';
import ChatListView from './app/views/ChatListView';
import ProfileView from './app/views/ProfileView';

export default class BubbleCounsel extends Component {
  render() {
    return (
      <Container>
        <Header>
            <Title>Header</Title>
        </Header>

        <Content>
          <IssueListView />
        </Content>

        <Footer>
          <FooterTab>
            <Button active>
                Issues
                <Icon name='ios-list' />
            </Button>
            <Button>
                Chats
                <Icon name='ios-chatboxes' />
            </Button>
            <Button>
                Profile
                <Icon name='ios-person' />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('BubbleCounsel', () => BubbleCounsel);
