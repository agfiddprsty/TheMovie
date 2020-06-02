import {TYPES} from '../../constants';

const initialState = {
  listPopular: [],
  isLoading: false,
  error: false,
};

export default function reducer(state = initialState, action) {
  const {type, data} = action;
  switch (type) {
    case TYPES.GET_MOVIES_POPULAR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listPopular: data,
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
