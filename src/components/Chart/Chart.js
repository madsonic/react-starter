import React, { PropTypes } from 'react';
import {
  LineChart, XAxis, YAxis, Line,
  CartesianGrid, Tooltip, Legend } from 'recharts';
import {
  indigo300, red300, blue300,
  pink300, cyan300, lime300, grey200 } from 'material-ui/styles/colors';
import moment from 'moment';
import classes from './Chart.css';

const CHART_COLORS = [indigo300, red300, blue300, pink300, cyan300, lime300];

const Chart = props => {
  return (<div className={classes.chart}>
    <LineChart
      data={props.prices}
      width={800}
      height={400}
      margin={{ top: 40, bottom: 20, left: 10, right: 50 }}
      className={classes.chartContainer}
    >
      <XAxis
        label="Date"
        dataKey="timestamp"
        tickFormatter={(timestamp) => moment(timestamp).format('M/D/YY H:mm')}
        padding={{ left: 20, right: 20 }}
      />
      <YAxis label="Price ($)" padding={{ bottom: 10, top: 10 }} />
      <CartesianGrid strokeDasharray="0 0" stroke={grey200} />
      <Legend
        verticalAlign="top"
        height={20}
      />
      <Tooltip
        labelFormatter={(timestamp) => moment(timestamp).format('MMM D YYYY, H:mm')}
        formatter={(v) => `$${v}`}/>
      {props.providers.map((provider, i) =>
        <Line key={i}
          type="monotone"
          dataKey={provider}
          stroke={CHART_COLORS[i]}
          strokeWidth={3}
        />
      )}
    </LineChart>
  </div>);
};

Chart.propTypes = {
  providers: PropTypes.arrayOf(PropTypes.string).isRequired,
  prices: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Chart;
