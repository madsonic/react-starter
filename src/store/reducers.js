import {
  GET_HOTELS,
  GET_DATE_RANGE,
  SELECT_HOTEL,
  SELECT_DATE_RANGE,
} from '../constants';

const initialState = {
  hotels: [
    {
      id: 1,
      name: 'Hotel New Hankyu Kyoto',
    },
    {
      id: 2,
      name: 'Renaissance Malmo Hotel',
    },
    {
      id: 3,
      name: 'Atlanta Marriott Marquis',
    },
    {
      id: 4,
      name: 'Hilton Izmir',
    },
  ],
  selectedHotel: 1,
  dateRanges: [
    {
      id: 1,
      start: '2017-06-01T07:00:00.000Z',
      end: '2017-06-03T07:00:00.000Z',
    },
    {
      id: 2,
      start: '2017-08-01T07:00:00.000Z',
      end: '2017-08-03T07:00:00.000Z',
    },
    {
      id: 3,
      start: '2017-05-01T07:00:00.000Z',
      end: '2017-05-03T07:00:00.000Z',
    },
  ],
  selectedDateRange: 1,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
  case GET_HOTELS:
    return state;
  case GET_DATE_RANGE:
    return state;
  case SELECT_HOTEL:
    state = Object.assign({}, state, {
      selectedHotel: action.payload.selectedHotel,
    });
    return state;
  case SELECT_DATE_RANGE:
    state = Object.assign({}, state, {
      selectedDateRange: action.payload.selectedDateRange,
    });
    return state;
  default:
    return state;
  }
};

export default reducers;
