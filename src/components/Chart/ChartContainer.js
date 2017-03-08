import { connect } from 'react-redux';
import Chart from './Chart';

const mapStateToProps = (state) => {
    return {
        value: state.count,
    };
};


export default connect(mapStateToProps)(Chart);