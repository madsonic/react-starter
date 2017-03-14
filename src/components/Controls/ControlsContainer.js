import { connect } from 'react-redux';
import ControlsForm from './ControlsForm';
import { getHotels, getDateRange, selectHotel, selectDateRange } from '../../actions/index';

const mapStateToProps = state => ({
  hotels: state.hotels,
  dateRanges: state.dateRanges,
  providers: state.providers,
  selectedHotel: state.selectedHotel,
  selectedDateRange: state.selectedDateRange,
});

const mapDispatchToProps = dispatch => ({
  selectHotel: payload => (dispatch(selectHotel(payload))),
  onSelectStartDate: () => dispatch(getDateRange()),
  getHotels: () => dispatch(getHotels()),
  selectDateRange: payload => (dispatch(selectDateRange(payload))),
});


export default connect(mapStateToProps, mapDispatchToProps)(ControlsForm);
