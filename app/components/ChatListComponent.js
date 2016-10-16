import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card, CardItem, Text } from 'native-base';

export default class ChatListComponent extends Component {

  render() {
    return (
      <ScrollView>
        <Card>
          <CardItem header>
              <Text>User1</Text>
          </CardItem>

          <CardItem>
              <Text>
                  I need some help please
              </Text>
          </CardItem>

          <CardItem header>
              <Text>Last active: 10 mins ago</Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem header>
              <Text>User2</Text>
          </CardItem>

          <CardItem>
              <Text>
                  I need some help please
              </Text>
          </CardItem>

          <CardItem header>
              <Text>Last active: 10 mins ago</Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem header>
              <Text>User3</Text>
          </CardItem>

          <CardItem>
              <Text>
                  I need some help please
              </Text>
          </CardItem>

          <CardItem header>
              <Text>Last active: 10 mins ago</Text>
          </CardItem>
        </Card>
      </ScrollView>
    );
  }
}
