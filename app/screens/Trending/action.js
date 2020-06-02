/* eslint no-use-before-define: ["error", { "functions": false }] */
import {TYPES} from '../../constants';
import {url, apikey} from '../../configs';
import axios from 'axios';

export function fetchGetTrending(time) {
  return async dispatch => {
    dispatch(loading());
    try {
      await axios
        .get(`${url}/trending/all/${time}?api_key=${apikey}`)
        .then(res => {
          const data = res.data;
          dispatch(getMoviesTrendingSuccess(data.results));
        });
    } catch (error) {
      dispatch(getMoviesTrendingFailure(error));
    } finally {
      dispatch(loadingDone());
    }
  };
}

function getMoviesTrendingSuccess(data) {
  return {
    type: TYPES.GET_MOVIES_TRENDING_SUCCESS,
    data,
  };
}

function getMoviesTrendingFailure(err) {
  return {
    type: TYPES.ERROR,
    err,
  };
}

function loading() {
  return {
    type: TYPES.LOADING,
  };
}

function loadingDone() {
  return {
    type: TYPES.LOADING_DONE,
  };
}

export default fetchGetTrending;
