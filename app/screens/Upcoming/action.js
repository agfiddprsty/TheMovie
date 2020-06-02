/* eslint no-use-before-define: ["error", { "functions": false }] */
import {TYPES} from '../../constants';
import {url, apikey} from '../../configs';
import axios from 'axios';

export function fetchGetUpcoming() {
  return async dispatch => {
    dispatch(loading());
    try {
      await axios.get(`${url}/movie/upcoming?api_key=${apikey}`).then(res => {
        const data = res.data;
        dispatch(getMoviesUpcomingSuccess(data.results));
      });
    } catch (error) {
      dispatch(getMoviesUpcomingFailure(error));
    } finally {
      dispatch(loadingDone());
    }
  };
}

function getMoviesUpcomingSuccess(data) {
  return {
    type: TYPES.GET_MOVIES_UPCOMING_SUCCESS,
    data,
  };
}

function getMoviesUpcomingFailure(err) {
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

export default fetchGetUpcoming;
