import React, { Component, PropTypes } from 'react';
import { View, ScrollView } from 'react-native';
import { Card, CardItem, Button, Icon, Text } from 'native-base';

export default class IssueListComponent extends Component {
  static get defaultProps() {
    return {
      title: 'IssueListComponent'
    };
  }

  render() {
    return (
      <ScrollView>
        <Card>
          <CardItem header onPress={this.props.onForward}>
              <Text>Flagged User</Text>
          </CardItem>

          <CardItem>
              <Text>
                  User1 was flagged at 10:00pm
              </Text>
          </CardItem>

          <CardItem header>
              <Text>Handled by: None</Text>
          </CardItem>
        </Card>
      </ScrollView>
    )
  }
}
