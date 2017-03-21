import React, { PropTypes } from 'react';
import { LineChart, XAxis, YAxis, Line, CartesianGrid, Tooltip, Legend } from 'recharts';
import { indigo300, blue300, grey200 } from 'material-ui/styles/colors';
import moment from 'moment';
import classes from './Chart.css';

const Chart = props => {
  console.log(props.prices);
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
        tickFormatter={v => moment(v).format('M/D/YY')}
        padding={{ left: 20, right: 20 }}
      />
      <YAxis label="Price" padding={{ bottom: 10, top: 10 }} />
      <CartesianGrid strokeDasharray="0 0" stroke={grey200} />
      <Legend
        verticalAlign="top"
        height={20}
      />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="expedia"
        stroke={blue300}
        strokeWidth={3}
      />
      <Line
          type="monotone"
          dataKey="zumata"
          stroke={indigo300}
          strokeWidth={3}
        />
    </LineChart>
  </div>);
};

Chart.propTypes = {
  providers: PropTypes.arrayOf(PropTypes.string).isRequired,
  prices: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Chart;
