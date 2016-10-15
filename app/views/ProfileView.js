import React, { Component } from 'react';
import { Card, CardItem, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class ProfileView extends Component {
  render() {
    return (
      <Grid>
        <Col>
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
        </Col>
      </Grid>
    );
  }
}
