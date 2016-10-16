import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Header, Title, Footer, FooterTab, Tabs, Card, CardItem, Button, Icon, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import IssueListComponent from '../components/IssueListComponent';

export default class IssueListView extends Component {
  render() {

    return (
      <Container>
        <Header>
          <Title>Issues</Title>
        </Header>
        <Content>
          <IssueListComponent />
        </Content>
      </Container>
    );
  }
}

var styles = StyleSheet.create({

});
