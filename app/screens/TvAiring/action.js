/* eslint no-use-before-define: ["error", { "functions": false }] */
import {TYPES} from '../../constants';
import {url, apikey} from '../../configs';
import axios from 'axios';

export function fetchGetAiring() {
  return async dispatch => {
    dispatch(loading());
    try {
      await axios.get(`${url}/tv/airing_today?api_key=${apikey}`).then(res => {
        const data = res.data;
        dispatch(getMoviesAiringSuccess(data.results));
      });
    } catch (error) {
      dispatch(getMoviesAiringFailure(error));
    } finally {
      dispatch(loadingDone());
    }
  };
}

function getMoviesAiringSuccess(data) {
  return {
    type: TYPES.GET_MOVIES_AIRING_SUCCESS,
    data,
  };
}

function getMoviesAiringFailure(err) {
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

export default fetchGetAiring;
