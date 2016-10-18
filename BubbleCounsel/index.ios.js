import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import MainView from './app/views/MainView';
import ProfileFormView from './app/views/ProfileFormView';

export default class BubbleCounsel extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true} >
          <Scene key="main" component={MainView} title="Main" initial={true}  />
          <Scene key="profileForm" component={ProfileFormView} title="Edit Profile" />
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('BubbleCounsel', () => BubbleCounsel);
