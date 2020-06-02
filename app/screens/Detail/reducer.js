import {TYPES} from '../../constants';

const initialState = {
  detailMovie: [],
  listVideo: [],
  listReviews: [],
  listRecommend: [],
  listSimilar: [],
  isLoading: false,
  error: false,
};

export default function reducer(state = initialState, action) {
  const {type, data} = action;
  switch (type) {
    case TYPES.GET_MOVIES_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        detailMovie: data,
      };
    case TYPES.GET_MOVIES_VIDEOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listVideo: data,
      };
    case TYPES.GET_MOVIES_REVIEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listReviews: data,
      };
    case TYPES.GET_MOVIES_RECOMMENDED_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listRecommend: data,
      };
    case TYPES.GET_MOVIES_SIMILAR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listSimilar: data,
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
