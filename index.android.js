/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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

export default class BubbleCounsel extends Component {
  render() {
    return (
      <Router sceneStyle={{backgroundColor:'red'}}>
        <Scene key="root" hideNavBar={true} style={styles.container}>
          <Scene key="main" component={MainView} title="Issues" initial={true}  />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  }
});

AppRegistry.registerComponent('BubbleCounsel', () => BubbleCounsel);
