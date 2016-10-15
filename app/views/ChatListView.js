import React, { Component } from 'react';
import { Card, CardItem, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class ChatListView extends Component {
  render() {
    return (
      <Grid>
        <Col>
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
        </Col>
      </Grid>
    );
  }
}
