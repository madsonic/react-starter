import { connect } from 'react-redux';
import Chart from './Chart';

const mapStateToProps = () => ({
  hotels: [
    {
      name: 'A',
      prices: [
        { date: 'dateA', p1: 100, p2: 20 },
        { date: 'dateB', p1: 200, p2: 300 },
        { date: 'dateC', p1: 400, p2: 244 },
        { date: 'dateD', p1: 1000, p2: 679 },
        { date: 'dateE', p1: 129, p2: 160 },
      ],
    },
    {
      name: 'B',
      prices: [
        { date: 'dateA', p1: 10, p2: 110 },
        { date: 'dateB', p1: 210, p2: 200 },
        { date: 'dateC', p1: 540, p2: 244 },
        { date: 'dateD', p1: 290, p2: 379 },
        { date: 'dateE', p1: 129, p2: 10 },
      ],
    },
  ],
});

export default connect(mapStateToProps)(Chart);
