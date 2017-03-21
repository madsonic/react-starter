import React from 'react';
import Paper from 'material-ui/Paper';
import classes from './Body.css';

import ChartView from '../Chart/ChartView';

const Body = () => {
  const style = {
    height: 600,
    width: 900,
    margin: 20,
  };

  return (
    <div className={classes.mainBody}>
      <Paper style={style} zDepth={1}>
        <ChartView />
      </Paper>
    </div>
  );
};

export default Body;
