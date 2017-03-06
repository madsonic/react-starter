import React, { Component } from 'react';
import Chart from './Chart'
import classes from './ChartContainer.css'

class ChartContainer extends Component {
    render() {
        const data = [
            { date: 'dateA', p1: 100, p2: 20},
            { date: 'dateB', p1: 200, p2: 300},
            { date: 'dateC', p1: 400, p2: 244},
            { date: 'dateD', p1: 1000, p2: 679},
            { date: 'dateE', p1: 129, p2: 160},
        ];

        return(
            <div className={classes.chartContainer}>
                <Chart data={data}/>
            </div>
        );
    }
}

export default ChartContainer;