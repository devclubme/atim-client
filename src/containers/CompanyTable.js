import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Trend from "react-trend";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
    marginBottom: theme.spacing(3)
  },
  table: {
    minWidth: 650
  },
  avatar: {
    margin: 5
  }
}));

function createData(
  name,
  income_trend_balance,
  expense_trend_balance,
  income,
  expense,
  one_liner,
  image_source
) {
  return {
    name,
    income_trend_balance,
    expense_trend_balance,
    income,
    expense,
    one_liner,
    image_source
  };
}

const rows = [];

const generic_logo_url =
  "https://res.cloudinary.com/practicaldev/image/fetch/s--ipV6F4tM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://raw.githubusercontent.com/serverless/assets/master/Icon/Framework/PNG/Serverless_Framework-icon01.png";

export default function CompanyTable(props) {
  const classes = useStyles();

  props.data.forEach(function(actor) {
    let actor_trends = props.pulloutFinancialTrends([actor]);

    let income_trend_balance = Object.keys(actor_trends.income).map(
      key => actor_trends.income[key]
    );
    let expense_trend_balance = Object.keys(actor_trends.expense).map(
      key => actor_trends.expense[key]
    );

    if (income_trend_balance.length === 0) income_trend_balance = [0, 0];
    else if (income_trend_balance.length === 1) income_trend_balance = [0, income_trend_balance[0]];

    if (expense_trend_balance.length === 0) expense_trend_balance = [0, 0];
    else if (expense_trend_balance.length === 1)
      expense_trend_balance = [0, expense_trend_balance[0]];

    if (actor.name.match(/".*?"/g) !== null)
      actor.name = actor.name
        .match(/".*?"/g)[0]
        .split(/"/g)
        .join("");

    rows.push(
      createData(
        actor.name,
        income_trend_balance,
        expense_trend_balance,
        (income_trend_balance.slice(-1)[0] / 1000000).toFixed(2),
        (expense_trend_balance.slice(-1)[0] / 1000000).toFixed(2),
        actor.businessSector.name,
        generic_logo_url
      )
    );
  });

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name} selected={false} hover={true}>
              <TableCell align="right">
                <Avatar alt="Logo" src={row.image_source} className={classes.avatar} />
              </TableCell>
              <TableCell component="th" scope="row">
                <Typography variant="h6" component="h6" gutterBottom>
                  {row.name}
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                  {row.one_liner}
                </Typography>
              </TableCell>
              <TableCell component="th" scope="row">
                <Trend
                  smooth
                  autoDraw
                  autoDrawDuration={3000}
                  autoDrawEasing="ease-out"
                  data={row.income_trend_balance}
                  gradient={["#42b3f4", "#f50057"]}
                  radius={10.4}
                  strokeWidth={4.1}
                  strokeLinecap={"round"}
                />
                <Typography align="center" variant="overline" display="block" gutterBottom>
                  income chart(yearly)
                </Typography>
              </TableCell>

              <TableCell component="th" scope="row">
                <Typography variant="h5" component="h2" gutterBottom>
                  Income
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                  {row.income}M (€)
                </Typography>
              </TableCell>

              <TableCell component="th" scope="row">
                <Trend
                  smooth
                  autoDraw
                  autoDrawDuration={3000}
                  autoDrawEasing="ease-out"
                  data={row.expense_trend_balance}
                  gradient={["#42b3f4", "#f50057"]}
                  radius={10.4}
                  strokeWidth={4.1}
                  strokeLinecap={"round"}
                />
                <Typography align="center" variant="overline" display="block" gutterBottom>
                  expense chart(yearly)
                </Typography>
              </TableCell>

              <TableCell component="th" scope="row">
                <Typography variant="h5" component="h2" gutterBottom>
                  Expense
                </Typography>
                <Typography align="center" variant="overline" display="block" gutterBottom>
                  {row.expense}M (€)
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
