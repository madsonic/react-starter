import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ControlsForm from './ControlsForm';
import {
  getHotels,
  getDateRanges,
  submitSelectedHotel,
  selectDateRange,
  selectRoomType,
  submitSearch,
} from '../../actions/index';

const mapStateToProps = state => ({
  hotels: state.hotels,
  dateRanges: state.dateRanges,
  roomTypes: state.roomTypes,
  selectedHotel: state.selectedHotel,
  selectedDateRange: state.selectedDateRange,
  selectedRoomType: state.selectedRoomType,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getHotels,
    getDateRanges,
    submitSelectedHotel,
    selectDateRange,
    selectRoomType,
    submitSearch,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ControlsForm);
