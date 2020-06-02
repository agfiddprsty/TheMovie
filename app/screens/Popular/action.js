/* eslint no-use-before-define: ["error", { "functions": false }] */
import {TYPES} from '../../constants';
import {url, apikey} from '../../configs';
import axios from 'axios';

export function fetchGetPopular(movie) {
  return async dispatch => {
    dispatch(loading());
    try {
      await axios
        .get(`${url}/discover/${movie}?api_key=${apikey}`)
        .then(res => {
          const data = res.data;
          dispatch(getMoviesPopularSuccess(data.results));
        });
    } catch (error) {
      dispatch(getMoviesPopularFailure(error));
    } finally {
      dispatch(loadingDone());
    }
  };
}

function getMoviesPopularSuccess(data) {
  return {
    type: TYPES.GET_MOVIES_POPULAR_SUCCESS,
    data,
  };
}

function getMoviesPopularFailure(err) {
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

export default fetchGetPopular;
