
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Chart from 'react-google-charts';

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

export default function CompanyBarChartCard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent>
                <Chart
                    chartType="Bar"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['ded', 'null'],
                        ['2016', 2],
                        ['2017', 4],
                        ['2018', 5],
                        ['2019', 6],
                    ]}
                    options={{
                        // Material design options
                        legend: 'none',
                        animation: {
                            startup: true,
                            easing: 'linear',
                            duration: 1500,
                        }
                    }}
                    // For tests
                    rootProps={{ 'data-testid': '2' }}
                />
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
    );
}