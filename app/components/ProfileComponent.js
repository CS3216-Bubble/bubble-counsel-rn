import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card, CardItem, Text } from 'native-base';

export default class ProfileComponent extends Component {
  render() {
    return (
      <ScrollView>
        <Card>
          <CardItem header>
              <Text>John Tan</Text>
          </CardItem>

          <CardItem>
              <Text>
                  Counsellor
              </Text>
          </CardItem>
        </Card>
      </ScrollView>
    );
  }
}
