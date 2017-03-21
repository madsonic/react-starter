import {
  GET_HOTELS_SUCCESS,
  GET_ROOM_TYPES,
  GET_DATE_RANGES_SUCCESS,
  SELECT_HOTEL,
  SELECT_DATE_RANGE,
  SELECT_ROOM_TYPE,
  SEARCH_SUCCESS,
} from '../constants';

const initialState = {
  hotels: [],
  dateRanges: [],
  roomTypes: [],
  prices: [],
  providers: [],
  selectedHotel: -1,
  selectedDateRange: -1,
  selectedRoomType: -1,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
  case GET_HOTELS_SUCCESS:
    state = Object.assign({}, state, {
      hotels: action.payload,
      selectedHotel: action.payload[0].id,
    });
    return state;
  case GET_ROOM_TYPES:
    state = Object.assign({}, state, {
      roomTypes: action.payload,
      selectedRoomType: action.payload[0].id,
    });
    return state;
  case GET_DATE_RANGES_SUCCESS:
    state = Object.assign({}, state, {
      dateRanges: action.payload,
      selectedDateRange: action.payload[0].id,
    });
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
  case SELECT_ROOM_TYPE:
    state = Object.assign({}, state, {
      selectedRoomType: action.payload.selectedRoomType,
    });
    return state;
  case SEARCH_SUCCESS:
    state = Object.assign({}, state, {
      prices: action.payload.prices,
      providers: action.payload.providers,
    });
    return state;
  default:
    return state;
  }
};

export default reducers;
