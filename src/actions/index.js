import {
  GET_HOTELS,
  GET_DATE_RANGE,
  SELECT_HOTEL,
  SELECT_DATE_RANGE,
  SELECT_ROOM_TYPE,
} from '../constants';

const getHotels = () => ({ type: GET_HOTELS });
const getDateRange = () => ({ type: GET_DATE_RANGE });
const selectHotel = payload => ({ type: SELECT_HOTEL, payload });
const selectDateRange = payload => ({ type: SELECT_DATE_RANGE, payload });
const selectRoomType = payload => ({ type: SELECT_ROOM_TYPE, payload });

export {
  getHotels,
  getDateRange,
  selectHotel,
  selectDateRange,
  selectRoomType,
};
