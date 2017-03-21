import { connect } from 'react-redux';
import Chart from './Chart';

const mapStateToProps = state => ({
  providers: state.providers,
  prices: state.prices,
});

export default connect(mapStateToProps)(Chart);
