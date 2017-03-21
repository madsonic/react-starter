import {
  GET_HOTELS_SUCCESS,
  GET_ROOM_TYPES,
  GET_DATE_RANGES_SUCCESS,
  SELECT_HOTEL,
  SELECT_DATE_RANGE,
  SELECT_ROOM_TYPE,
  SEARCH_SUCCESS,
} from '../constants';
import api from '../api';
import _ from 'underscore';

const getHotelsSuccess = payload => ({ type: GET_HOTELS_SUCCESS, payload });
const getHotels = () => dispatch => {
  api.get('/hotels')
    .then(resp => {
      dispatch(getHotelsSuccess(resp.data));
      dispatch(getRoomTypes(resp.data[0].id));
    })
    .catch(err => {
      console.log(err);
    });
};

const getRoomTypesSuccess = payload => ({ type: GET_ROOM_TYPES, payload });
const getRoomTypes = hotelId => dispatch => {
  api.get(`/hotels/${hotelId}/rooms`)
    .then(resp => {
      dispatch(getRoomTypesSuccess(resp.data));
    })
    .catch(err => {
      console.log(err);
    });
};

const getDateRangesSuccess = payload => ({ type: GET_DATE_RANGES_SUCCESS, payload });
const getDateRanges = () => dispatch => {
  api.get('/booking_ranges')
    .then(resp => {
      dispatch(getDateRangesSuccess(resp.data));
    })
    .catch(err => {
      console.log(err);
    });
};

const selectHotel = payload => ({ type: SELECT_HOTEL, payload });
const submitSelectedHotel = payload => dispatch => {
  dispatch(selectHotel(payload));
  dispatch(getRoomTypes(payload));
};

const selectDateRange = payload => ({ type: SELECT_DATE_RANGE, payload });
const selectRoomType = payload => ({ type: SELECT_ROOM_TYPE, payload });

const searchSuccess = payload => ({ type: SEARCH_SUCCESS, payload });
const submitSearch = (roomId, bookingRangeId) => dispatch => {
  api.get('/prices/search', {
    params: {
      roomId: roomId,
      bookingRangeId: bookingRangeId,
    },
  })
  .then(resp => {
    dispatch(searchSuccess({
      prices: flattenPrices(resp.data),
      providers: Object.keys(resp.data),
    }));
  })
  .catch(err => {
    console.log(err);
  });
};

const flattenPrices = providers => {
  const providerNames = Object.keys(providers);
  const providersArray = [];
  for (let key in providers) {
    providersArray.push(providers[key]);
  }

  const zipped = providersArray.reduce((acc, val) => _.zip(acc, val));

  return zipped.map(d => d.reduce((acc, val, idx) => {
    const aux = {};
    aux['timestamp'] = val.timestamp;
    aux[providerNames[idx]] = val.amount;

    return Object.assign({}, acc, aux);
  }, {}));
};

export {
  getHotels,
  getRoomTypes,
  getDateRanges,
  submitSelectedHotel,
  selectDateRange,
  selectRoomType,
  submitSearch,
};
