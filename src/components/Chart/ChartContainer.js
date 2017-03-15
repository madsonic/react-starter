import { connect } from 'react-redux';
import Chart from './Chart';

const mapStateToProps = state => ({
  providers: state.providers,
});

export default connect(mapStateToProps)(Chart);
