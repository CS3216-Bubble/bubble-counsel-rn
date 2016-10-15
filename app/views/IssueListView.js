import React, { Component } from 'react';
import { Card, CardItem, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class IssueListView extends Component {
  render() {
    return (
      <Grid>
        <Col>
          <Card>
            <CardItem header>
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
        </Col>
      </Grid>
    );
  }
}
