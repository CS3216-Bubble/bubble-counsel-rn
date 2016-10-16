import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text
} from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';

import MainView from './app/views/MainView';
import ProfileFormView from './app/views/ProfileFormView';

export default class BubbleCounsel extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="main" component={MainView} title="Issues" initial={true}  />
          <Scene key="profileForm" component={ProfileFormView} title="Profile Form" />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('BubbleCounsel', () => BubbleCounsel);
