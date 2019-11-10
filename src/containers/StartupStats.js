import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import EuroIcon from '@material-ui/icons/Euro';
const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    title: {
        color: '#D01919'
    },
}));

export default function StartupStats() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                align="center"
            >
                <Grid item sm >
                    <Typography className={classes.title} variant="h3" component="h2" gutterBottom>
                        6
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        startups
                    </Typography>
                </Grid>
                <Grid item sm >
                    <Typography className={classes.title} variant="h3" component="h2" gutterBottom>
                        2
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        founders
                    </Typography>
                </Grid>
                <Grid item sm >
                    <Typography className={classes.title} variant="h3" component="h2" gutterBottom>
                        12M
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        investments
                    </Typography>
                </Grid>
            </Grid>
        </Paper >
    );
}