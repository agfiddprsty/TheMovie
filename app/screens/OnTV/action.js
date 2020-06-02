/* eslint no-use-before-define: ["error", { "functions": false }] */
import {TYPES} from '../../constants';
import {url, apikey} from '../../configs';
import axios from 'axios';

export function fetchGetOn() {
  return async dispatch => {
    dispatch(loading());
    try {
      await axios.get(`${url}/tv/on_the_air?api_key=${apikey}`).then(res => {
        const data = res.data;
        dispatch(getMoviesOnSuccess(data.results));
      });
    } catch (error) {
      dispatch(getMoviesOnFailure(error));
    } finally {
      dispatch(loadingDone());
    }
  };
}

function getMoviesOnSuccess(data) {
  return {
    type: TYPES.GET_MOVIES_ON_SUCCESS,
    data,
  };
}

function getMoviesOnFailure(err) {
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

export default fetchGetOn;
