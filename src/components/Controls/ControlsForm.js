import React, { Component, PropTypes } from 'react';
import { SelectField, MenuItem } from 'material-ui';
import moment from 'moment';
import classes from './ControlsForm.css';

class ControlsForm extends Component {
  static propTypes = {
    hotels: PropTypes.arrayOf(PropTypes.object).isRequired,
    dateRanges: PropTypes.arrayOf(PropTypes.object).isRequired,
    roomTypes: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectedHotel: PropTypes.number.isRequired,
    selectedDateRange: PropTypes.number.isRequired,
    selectedRoomType: PropTypes.number.isRequired,
    submitSelectedHotel: PropTypes.func.isRequired,
    selectDateRange: PropTypes.func.isRequired,
    selectRoomType: PropTypes.func.isRequired,
    getHotels: PropTypes.func.isRequired,
    getDateRanges: PropTypes.func.isRequired,
    submitSearch: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.getHotels();
    this.props.getDateRanges();
    this.props.submitSearch(this.props.selectedRoomType, this.props.selectedDateRange);
  }

  handleSelectHotel = (event, key, value) => {
    this.props.submitSelectedHotel({ selectedHotel: value });
    this.props.submitSearch(this.props.selectedRoomType, this.props.selectedDateRange);
  }

  handleSelectDateRange = (event, key, value) => {
    this.props.selectDateRange({ selectedDateRange: value });
    this.props.submitSearch(this.props.selectedRoomType, this.props.selectedDateRange);
  }

  handleSelectRoomType = (event, key, value) => {
    this.props.selectRoomType({ selectedRoomType: value });
    this.props.submitSearch(this.props.selectedRoomType, this.props.selectedDateRange);
  }

  render() {
    const {
      hotels,
      dateRanges,
      roomTypes,
      selectedHotel,
      selectedDateRange,
      selectedRoomType,
    } = this.props;

    const getDateRange = (start, end) => (
      `${moment(start).format('MMM DD YYYY')} - ${moment(end).format('MMM DD YYYY')}`
    );

    return (
      <div className={classes.form}>
        <SelectField
          autoWidth={true}
          floatingLabelText="Hotel"
          value={hotels.length ? hotels.filter(hotel => hotel.id === selectedHotel)[0].id : null}
          onChange={this.handleSelectHotel}
        >
          {hotels.map(hotel => (
            <MenuItem
              key={hotel.id}
              value={hotel.id}
              primaryText={hotel.name}
            />
          ))}
        </SelectField>

        <SelectField
          autoWidth={true}
          floatingLabelText="Date"
          value={dateRanges.length ? dateRanges.filter(dateRange => dateRange.id === selectedDateRange)[0].id : null}
          onChange={this.handleSelectDateRange}
        >
          {dateRanges.map(range => (
            <MenuItem
              key={range.id}
              value={range.id}
              primaryText={getDateRange(range.start, range.end)}
            />
          ))}
        </SelectField>

        <SelectField
          floatingLabelText="Room Type"
          value={roomTypes.length ? roomTypes.filter(roomType => roomType.id === selectedRoomType)[0].id : null}
          onChange={this.handleSelectRoomType}
          style={{ width: 300 }}
          autoWidth={false}
        >
          {roomTypes.map(roomType => (
            <MenuItem
              key={roomType.id}
              value={roomType.id}
              primaryText={roomType.name}
            />
          ))}
        </SelectField>
      </div>
    );
  }
}

export default ControlsForm;
