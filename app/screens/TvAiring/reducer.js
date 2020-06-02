import {TYPES} from '../../constants';

const initialState = {
  listAiring: [],
  isLoading: false,
  error: false,
};

export default function reducer(state = initialState, action) {
  const {type, data} = action;
  switch (type) {
    case TYPES.GET_MOVIES_PLAY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listAiring: data,
      };
    case TYPES.ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
}
