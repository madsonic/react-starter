import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import classes from './Body.css';

import ChartContainer from '../Chart/ChartContainer';

class Body extends Component {
    render() {
        const style = {
            height: 400,
            width: 800,
            margin: 20,
            textAlign: 'center',
        };

        return(
            <div className={classes.mainBody}>
                <Paper style={style} zDepth={1}>
                    <ChartContainer />
                </Paper>
            </div>
        );
    }
}

export default Body;