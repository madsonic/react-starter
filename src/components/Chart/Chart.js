import React, { Component } from 'react';
import { LineChart, XAxis, YAxis, Line, CartesianGrid, Tooltip, Legend } from 'recharts';
import { indigo300, blue300, teal300, green300, grey200 } from 'material-ui/styles/colors';

class Chart extends Component {

    render() {
        const { data } = this.props;
        console.log(data)

        return(
            <LineChart
                data={data}
                width={800}
                height={400}
                margin={{ top:20, bottom:20, left:10, right:50 }}
                >
                <XAxis dataKey='date' padding={{ left:20, right:20 }} />
                <YAxis padding={{ bottom:10 }} />
                <CartesianGrid strokeDasharray="0 0" stroke={grey200} />
                <Legend verticalAlign='top' height={20} />
                <Tooltip />
                <Line type='monotone' dataKey='p1' stroke={indigo300} strokeWidth={3} />
                <Line type='monotone' dataKey='p2' stroke={blue300} strokeWidth={3} />
                <Line type='monotone' dataKey='p3' stroke={teal300} strokeWidth={3} />

            </LineChart>
        );
    }
}

export default Chart;