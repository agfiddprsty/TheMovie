/* eslint no-use-before-define: ["error", { "functions": false }] */
import {TYPES} from '../../constants';
import {url, apikey} from '../../configs';
import axios from 'axios';

export function fetchGetPlay() {
  return async dispatch => {
    dispatch(loading());
    try {
      await axios
        .get(`${url}/movie/now_playing?api_key=${apikey}`)
        .then(res => {
          const data = res.data;
          dispatch(getMoviesPlaySuccess(data.results));
        });
    } catch (error) {
      dispatch(getMoviesPlayFailure(error));
    } finally {
      dispatch(loadingDone());
    }
  };
}

function getMoviesPlaySuccess(data) {
  return {
    type: TYPES.GET_MOVIES_PLAY_SUCCESS,
    data,
  };
}

function getMoviesPlayFailure(err) {
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

export default fetchGetPlay;
