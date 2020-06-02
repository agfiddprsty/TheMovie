/* eslint no-use-before-define: ["error", { "functions": false }] */
import {TYPES} from '../../constants';
import {url, apikey} from '../../configs';
import axios from 'axios';

export function fetchGetTop(movie) {
  return async dispatch => {
    dispatch(loading());
    try {
      await axios
        .get(`${url}/${movie}/top_rated?api_key=${apikey}`)
        .then(res => {
          const data = res.data;
          dispatch(getMoviesTopSuccess(data.results));
        });
    } catch (error) {
      dispatch(getMoviesTopFailure(error));
    } finally {
      dispatch(loadingDone());
    }
  };
}

function getMoviesTopSuccess(data) {
  return {
    type: TYPES.GET_MOVIES_TOP_SUCCESS,
    data,
  };
}

function getMoviesTopFailure(err) {
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

export default fetchGetTop;
