import { connect } from 'react-redux';
import ControlsForm from './ControlsForm';
import { getHotels, selectHotel, selectDateRange, selectRoomType } from '../../actions/index';

const mapStateToProps = state => ({
  hotels: state.hotels,
  dateRanges: state.dateRanges,
  roomTypes: state.roomTypes,
  selectedHotel: state.selectedHotel,
  selectedDateRange: state.selectedDateRange,
  selectedRoomType: state.selectedRoomType,
});

const mapDispatchToProps = dispatch => ({
  getHotels: () => dispatch(getHotels()),
  selectHotel: payload => (dispatch(selectHotel(payload))),
  selectDateRange: payload => (dispatch(selectDateRange(payload))),
  selectRoomType: payload => (dispatch(selectRoomType(payload))),
});


export default connect(mapStateToProps, mapDispatchToProps)(ControlsForm);
