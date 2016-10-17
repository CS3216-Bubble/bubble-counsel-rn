import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import MainView from './app/views/MainView';

export default class BubbleCounsel extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true} >
          <Scene key="main" component={MainView} title="Main" initial={true}  />
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('BubbleCounsel', () => BubbleCounsel);
