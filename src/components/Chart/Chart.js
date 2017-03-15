import React, { PropTypes } from 'react';
import { LineChart, XAxis, YAxis, Line, CartesianGrid, Tooltip, Legend } from 'recharts';
import { indigo300, grey200 } from 'material-ui/styles/colors';
import moment from 'moment';

const Chart = props =>
  <LineChart
    data={props.providers.zumata}
    width={800}
    height={400}
    margin={{ top: 20, bottom: 20, left: 10, right: 50 }}
  >
    <XAxis
      label="Date"
      dataKey="timestamp"
      tickFormatter={v => moment(v).format('MMM DD YY')}
      padding={{ left: 20, right: 20 }}
    />
    <YAxis label="price" padding={{ bottom: 10, top: 10 }} />
    <CartesianGrid strokeDasharray="0 0" stroke={grey200} />
    <Legend verticalAlign="top" height={20} />
    <Tooltip />
    <Line type="monotone" dataKey="amount" stroke={indigo300} strokeWidth={3} />
  </LineChart>;

Chart.propTypes = {
  providers: PropTypes.shape({
    zumata: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default Chart;
