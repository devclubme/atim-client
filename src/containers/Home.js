import React, { Component } from "react";
import { API } from "aws-amplify";
import { Link } from "react-router-dom";
import { Icon, Statistic, Image, List, Grid, Button, Segment, Label } from "semantic-ui-react";
import _ from "lodash";

import "../css/Home.css";

const src = '/images/image.png'

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      actors: []
    };
  }

  async componentDidMount() {
    try {
      const actors = await this.actors();
      this.setState({ actors });
    } catch (e) {
      alert(e);
    }

    this.setState({ isLoading: false });
  }

  actors() {
    return API.get("actors", "/actors");
  }

  renderActors(actors) {
    return actors.map(actor =>
      <List.Item as={ Link } key={actor.id} to={`/actors/${actor.id}`}>
        <Image avatar src={src} size="miny"/>
        <List.Content>
          <List.Header>{actor.name}</List.Header>
          <List.Description>
            {actor.oneliner}
          </List.Description>
        </List.Content>
        <List.Content floated='right'>
          <Label  color='blue'>
            {actor.stage}
          </Label>
        </List.Content>
      </List.Item>
    );
  }

  renderStartupStats(actors) {
    return (
      <Statistic.Group widths='three'>
        <Statistic>
          <Statistic.Value>{actors.length}</Statistic.Value>
          <Statistic.Label>Startups</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value>{actors.length * 4}</Statistic.Value>
          <Statistic.Label>Founders</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value>
            <Icon name='' />
            500k
          </Statistic.Value>
          <Statistic.Label>Investments</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    )
  }

  renderList() {
    return (
      <div className="actors">
        <Grid centered>
          <Grid.Row centered columns={4}>
            <Button as={ Link } to="/actors/new" color="red" size="big">Dodaj startup</Button>
          </Grid.Row>
          <Grid.Column width={10}>
            <Segment raised>
              {!this.state.isLoading && this.renderStartupStats(this.state.actors)}
              <List celled selection relaxed="very" verticalAlign="middle" size="large">
                {!this.state.isLoading && this.renderActors(this.state.actors)}
              </List>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }

  render() {
    return (
      <div className="Home">
        { this.renderList() }
      </div>
    );
  }
}
