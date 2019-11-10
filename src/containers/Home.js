import React, { Component } from "react";
import { API } from "aws-amplify";
import TrendCard from '../containers/TrendCard';
import Typography from '@material-ui/core/Typography';
import Navigation from '../containers/Navigation'
import StartupTable from '../containers/StartupTable'
import StartupStats from '../containers/StartupStats'
import CompanyTable from '../containers/CompanyTable'
import 'typeface-roboto';
import _ from "lodash";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import "../css/Home.css";


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      actors: [],
      actor_trends: {
        income: {},
        expense: {}
      }
    };
  }

  async componentDidMount() {
    try {
      const actors = await this.actors();
      let actor_trends = this.pulloutFinancialTrends(actors);
      this.setState({
        actors,
        actor_trends
      });

      console.log(this.state.actor_trends);
    } catch (e) {
      alert(e);
    }

    this.setState({ isLoading: false });
  }

  actors() {
    return API.get("actors", "/companies");
  }

  renderActors(actors, actor_trends) {
    return (
      <Box><Container>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item sm >
            <TrendCard
              title="Income"
              data={Object.keys(actor_trends.income).map(key => actor_trends.income[key])}
              start_year={Object.keys(actor_trends.income)[0]}
              end_year={Object.keys(actor_trends.income).pop()}
            ></TrendCard>
          </Grid>
          <Grid item md align="center">
            <Typography variant="h2" component="h2" gutterBottom>
              companies
            </Typography>
          </Grid>
          <Grid item md>
            <TrendCard
              title="Expense"
              data={Object.keys(actor_trends.expense).map(key => actor_trends.expense[key])}
              start_year={Object.keys(actor_trends.expense)[0]}
              end_year={Object.keys(actor_trends.expense).pop()}
            ></TrendCard>
          </Grid>
        </Grid>
      </Container>
        <Container>
          <CompanyTable data={actors} pulloutFinancialTrends={this.pulloutFinancialTrends}></CompanyTable>
        </Container>
      </Box >)
  }

  renderStartupStats() {
    return (
      < Box >
        <Container>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item sm >
              <TrendCard
                title="Income"
                data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 12]}
              ></TrendCard>
            </Grid>
            <Grid item md align="center">
              <Typography variant="h2" component="h2" gutterBottom>
                startups
              </Typography>
            </Grid>
            <Grid item sm align="center ">
              <TrendCard
                title="Expense"
                data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 6]}
              ></TrendCard>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <StartupStats></StartupStats>
        </Container>
        <Container>
          <StartupTable></StartupTable>
        </Container>
      </Box >
    );
  }

  pulloutFinancialTrends(actors) {
    let income_trend = {};
    let expense_trend = {};
    //n*m  time complexity
    actors.forEach(function (actor) {
      actor.financialStatements.forEach(function (financial_statement) {
        let year = financial_statement.year;
        if (income_trend[year] === undefined)
          income_trend[year] = parseInt(financial_statement.balance.income);
        else
          income_trend[year] = income_trend[year] + parseInt(financial_statement.balance.income);

        if (expense_trend[year] === undefined)
          expense_trend[year] = parseInt(financial_statement.balance.expense);
        else
          expense_trend[year] = expense_trend[year] + parseInt(financial_statement.balance.expense);
      })
    });

    return {
      income: income_trend,
      expense: expense_trend
    };
  }

  render() {
    return (
      <div className="Home">
        <Navigation />
        {!this.state.isLoading && this.renderActors(this.state.actors, this.state.actor_trends)}
        {!this.state.isLoading && this.renderStartupStats()}
      </div >
    );
  }
}
