
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Trend from 'react-trend';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function TrendCard(props) {
    console.log('Here are dates');
    console.log(props.data);
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardHeader
                action={props.data[props.data.length - 1] > props.data[props.data.length - 2] ?
                    <ArrowUpwardIcon color="primary" />
                    :
                    <ArrowDownwardIcon color="primary" />
                }
                title={props.title}
                subheader={`Total ~ ${Math.round(props.data.reduce((a, b) => a + b, 0) / 1000000)} M (€)`}
            />
            <CardContent>
                <Trend
                    smooth
                    autoDraw
                    autoDrawDuration={3000}
                    autoDrawEasing="ease-out"
                    data={props.data}
                    gradient={['#42b3f4', '#f50057']}
                    radius={10.4}
                    strokeWidth={4.1}
                    strokeLinecap={'round'} />
                <Typography align="center" className={classes.pos} color="textSecondary">
                    {props.start_year}-{props.end_year}
                </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
    );
}