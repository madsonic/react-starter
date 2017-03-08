import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import classes from './Body.css';

import ChartView from '../Chart/ChartView';

class Body extends Component {
    render() {
        const style = {
            height: 600,
            width: 800,
            margin: 20,
            textAlign: 'center',
        };

        return(
            <div className={classes.mainBody}>
                <Paper style={style} zDepth={1}>
                    <ChartView />
                </Paper>
            </div>
        );
    }
}

export default Body;