import React, { Component } from 'react';
import { Platform, StyleSheet, TabBarIOS, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Header, Title } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

import IssueListView from './IssueListView';
import ChatListView from './ChatListView';
import ProfileView from './ProfileView';

export default class MainView extends Component {
  state = {
    selectedTab: 'issues',
    notifCount: 0,
    presses: 0,
  };

  _renderContent = () => {
    switch (this.state.selectedTab) {
      case 'issues':
        return (
          <IssueListView />
        );
        break;
      case 'chats':
        return (
          <ChatListView />
        );
        break;
      case 'profile':
        return (
          <ProfileView />
        );
        break;
    }
  };

  render() {
    return (
        <TabBarIOS
          tintColor="white"
          barTintColor="darkslateblue">
          <Icon.TabBarItemIOS
            title="Issues"
            iconName="ios-list-outline"
            selected={this.state.selectedTab === 'issues'}
            onPress={() => {
              this.setState({
                selectedTab: 'issues',
              });
            }}>
            {this._renderContent()}
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
            title="Chats"
            iconName="ios-chatboxes"
            selected={this.state.selectedTab === 'chats'}
            onPress={() => {
              this.setState({
                selectedTab: 'chats',
              });
            }}>
            {this._renderContent()}
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
            title="Profile"
            iconName="ios-person-outline"
            selected={this.state.selectedTab === 'profile'}
            onPress={() => {
              this.setState({
                selectedTab: 'profile',
              });
            }}>
            {this._renderContent()}
          </Icon.TabBarItemIOS>
        </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});
