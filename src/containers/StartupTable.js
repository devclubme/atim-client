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

function createData(name, protein, one_liner, image_source) {
    return { name, protein, one_liner, image_source };
}

const rows = [
    createData('Uhura Solutions', 4.0, 'Uhura is an AI platform that reads and understands contracts just as humans do', 'https://res.cloudinary.com/practicaldev/image/fetch/s--ipV6F4tM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://raw.githubusercontent.com/serverless/assets/master/Icon/Framework/PNG/Serverless_Framework-icon01.png'),
    createData('Talkini', 4.3, 'Platform to talk', 'https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-png-paint-brush-colour-1.png'),
    createData('Ideus', 6.0, 'We like ideas', 'https://res.cloudinary.com/practicaldev/image/fetch/s--ipV6F4tM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://raw.githubusercontent.com/serverless/assets/master/Icon/Framework/PNG/Serverless_Framework-icon01.png'),
    createData('Racunko', 4.3, 'Expense tracking to semi perfection', 'https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-png-paint-brush-colour-1.png'),
    createData('Sassmark', 3.9, 'We know what you sass the most', 'https://res.cloudinary.com/practicaldev/image/fetch/s--ipV6F4tM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://raw.githubusercontent.com/serverless/assets/master/Icon/Framework/PNG/Serverless_Framework-icon01.png'),
];

export default function StartupTable() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                {/* <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>name</TableCell>
                        <TableCell align="right">founders</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead> */}
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
                            <TableCell align="right">
                                <Chip label="Seed" color="secondary" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}