import React, { Component, PropTypes } from 'react';
import { DropDownMenu, MenuItem } from 'material-ui';
import moment from 'moment';

class ControlsForm extends Component {
  static propTypes = {
    hotels: PropTypes.arrayOf(PropTypes.object).isRequired,
    dateRanges: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectedHotel: PropTypes.number.isRequired,
    selectedDateRange: PropTypes.number.isRequired,
    selectHotel: PropTypes.func.isRequired,
    selectDateRange: PropTypes.func.isRequired,
    getHotels: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.getHotels();
  }

  handleSelectHotel = (event, key, value) => {
    this.props.selectHotel({ selectedHotel: value });
  }

  handleSelectDateRange = (event, key, value) => {
    this.props.selectDateRange({ selectedDateRange: value });
  }

  render() {
    const {
      hotels,
      dateRanges,
      selectedHotel,
      selectedDateRange,
    } = this.props;

    const getDateRange = (start, end) => (
      `${moment(start).format('MMM DD YYYY')} - ${moment(end).format('MMM DD YYYY')}`
    );

    return (
      <div>
        <DropDownMenu
          value={hotels.filter(hotel => hotel.id === selectedHotel)[0].id}
          onChange={this.handleSelectHotel}
        >
          {hotels.map(hotel => (<MenuItem key={hotel.id} value={hotel.id} primaryText={hotel.name} />))}
        </DropDownMenu>

        <DropDownMenu
          value={dateRanges.filter(dateRange => dateRange.id === selectedDateRange)[0].id}
          onChange={this.handleSelectDateRange}
        >
          {dateRanges.map(range => (
            <MenuItem
              key={range.id}
              value={range.id}
              primaryText={getDateRange(range.start, range.end)}
            />
          ))}
        </DropDownMenu>

      </div>

    );
  }
}

export default ControlsForm;
