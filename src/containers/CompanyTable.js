import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Trend from 'react-trend';
import EuroIcon from '@material-ui/icons/Euro';
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
        marginBottom: theme.spacing(3),
    },
    table: {
        minWidth: 650,
    },
    avatar: {
        margin: 5,
    }
}));

function createData(name, protein, expense_period, income, expense, one_liner, image_source) {
    return { name, protein, expense_period, income, expense, one_liner, image_source };
}

const rows = [
    createData('Uhura Solutions', [4.0, 12, 2, 4, 5, 23], [4.3, 12, 2, 4, 15], 560043, 342342, 'Uhura is an god like AI platform', 'https://res.cloudinary.com/practicaldev/image/fetch/s--ipV6F4tM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://raw.githubusercontent.com/serverless/assets/master/Icon/Framework/PNG/Serverless_Framework-icon01.png'),
    createData('Talkini', [4.3, 7, 2, 4, 5, 18], [4.3, 12, 2, 4, 0], 2341234, 12341, 'Platform to talk', 'https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-png-paint-brush-colour-1.png'),
    createData('Ideus', [6.0, 2, 2, 4, 5, 42], [4.3, 12, 2, 4, 5, 100], 2134123, 12341, 'We like ideas', 'https://res.cloudinary.com/practicaldev/image/fetch/s--ipV6F4tM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://raw.githubusercontent.com/serverless/assets/master/Icon/Framework/PNG/Serverless_Framework-icon01.png'),
    createData('Racunko', [4.3, 12, 2, 4, 5, 1], [4.3, 12, 2, 4, 5, 43], 54352, 2345, 'Expense tracking to semi perfection', 'https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-png-paint-brush-colour-1.png'),
    createData('Sassmark', [3.9, 15, 2, 4, 5, 100], [4.3, 12, 2, 4, 5, 11], 23452345, 234, 'We know what you sass the most', 'https://res.cloudinary.com/practicaldev/image/fetch/s--ipV6F4tM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://raw.githubusercontent.com/serverless/assets/master/Icon/Framework/PNG/Serverless_Framework-icon01.png'),
];

export default function CompanyTable() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.name} selected={false} hover={true}>
                            <TableCell align="right">
                                <Avatar alt="Remy Sharp" src={row.image_source} className={classes.avatar} />
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <Typography variant="h5" component="h2" gutterBottom>
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
                                    data={row.protein}
                                    gradient={['#42b3f4', '#f50057']}
                                    radius={10.4}
                                    strokeWidth={4.1}
                                    strokeLinecap={'round'} />
                                <Typography align="center" variant="overline" display="block" gutterBottom>
                                    income chart (yearly)
                                </Typography>
                            </TableCell>

                            <TableCell component="th" scope="row">
                                <Typography variant="h5" component="h2" gutterBottom>
                                    Income
                                </Typography>
                                <Typography align="center" variant="overline" display="block" gutterBottom>
                                    {row.income} €
                                </Typography>
                            </TableCell>


                            <TableCell component="th" scope="row">
                                <Trend
                                    smooth
                                    autoDraw
                                    autoDrawDuration={3000}
                                    autoDrawEasing="ease-out"
                                    data={row.expense_period}
                                    gradient={['#42b3f4', '#f50057']}
                                    radius={10.4}
                                    strokeWidth={4.1}
                                    strokeLinecap={'round'} />
                                <Typography align="center" variant="overline" display="block" gutterBottom>
                                    expense chart (yearly)
                                </Typography>
                            </TableCell>


                            <TableCell component="th" scope="row">
                                <Typography variant="h5" component="h2" gutterBottom>
                                    Expense
                                </Typography>
                                <Typography align="center" variant="overline" display="block" gutterBottom>
                                    {row.expense} €
                                </Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}