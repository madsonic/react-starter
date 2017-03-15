import {
  GET_HOTELS,
  GET_DATE_RANGE,
  SELECT_HOTEL,
  SELECT_DATE_RANGE,
  SELECT_ROOM_TYPE,
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
  roomTypes: [
    {
      id: 3,
      name: 'Deluxe Room Double Bed (Food: 2) (NonRef: false) (View: )',
    },
    {
      id: 4,
      name: 'Standard Room King Bed With City View (Food: 1) (NonRef: false) (View: City)',
    },
    {
      id: 5,
      name: 'Deluxe Room King Bed (Food: 2) (NonRef: false) (View: )',
    },
    {
      id: 6,
      name: 'Studio Suite King Bed (Food: 1) (NonRef: false) (View: )',
    },
  ],
  providers: {
    zumata: [
      {
        amount: 454.02,
        timestamp: '2017-03-09T02:00:00.203Z',
      },
      {
        amount: 454.02,
        timestamp: '2017-03-09T04:00:00.361Z',
      },
      {
        amount: 454.02,
        timestamp: '2017-03-09T06:00:00.405Z',
      },
      {
        amount: 454.02,
        timestamp: '2017-03-09T08:00:00.438Z',
      },
      {
        amount: 454.02,
        timestamp: '2017-03-09T10:00:00.455Z',
      },
      {
        amount: 454.02,
        timestamp: '2017-03-09T12:00:00.440Z',
      },
    ],
  },
  selectedDateRange: 1, // dont hardcode this
  selectedRoomType: 3, // dont hardcode this
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
  case SELECT_ROOM_TYPE:
    state = Object.assign({}, state, {
      selectedRoomType: action.payload.selectedRoomType,
    });
    return state;
  default:
    return state;
  }
};

export default reducers;
