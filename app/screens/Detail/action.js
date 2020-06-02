/* eslint no-use-before-define: ["error", { "functions": false }] */
import {TYPES} from '../../constants';
import {url, apikey} from '../../configs';
import axios from 'axios';

export const fetchGetDetailMovies = (id, media_type) => {
  return async dispatch => {
    dispatch(loading());
    try {
      await axios
        .get(`${url}/${media_type}/${id}?api_key=${apikey}`)
        .then(res => {
          const data = res.data;
          // console.log(data);
          dispatch(getDetailMoviesSuccess(data));
        });
    } catch (error) {
      dispatch(getDetailMoviesFailure(error));
      console.log(error);
    } finally {
      dispatch(loadingDone());
    }
  };
};

export const fetchGetVideos = (id, media_type) => {
  return async dispatch => {
    dispatch(loading());
    try {
      await axios
        .get(`${url}/${media_type}/${id}/videos?api_key=${apikey}`)
        .then(res => {
          const data = res.data;
          dispatch(getMoviesVideosSuccess(data.results));
        });
    } catch (error) {
      dispatch(getMoviesVideosFailure(error));
      console.log(error);
    } finally {
      dispatch(loadingDone());
    }
  };
};

export const fetchGetReview = (id, media_type) => {
  return async dispatch => {
    dispatch(loading());
    try {
      await axios
        .get(`${url}/${media_type}/${id}/reviews?api_key=${apikey}`)
        .then(res => {
          const data = res.data;
          dispatch(getMoviesReviewsSuccess(data.results));
        });
    } catch (error) {
      dispatch(getMoviesReviewsFailure(error));
      console.log(error);
    } finally {
      dispatch(loadingDone());
    }
  };
};

export const fetchGetRecommended = (id, media_type) => {
  return async dispatch => {
    dispatch(loading());
    try {
      await axios
        .get(`${url}/${media_type}/${id}/recommendations?api_key=${apikey}`)
        .then(res => {
          const data = res.data;
          dispatch(getMoviesRecommendedSuccess(data.results));
        });
    } catch (error) {
      dispatch(getMoviesRecommendedFailure(error));
      console.log(error);
    } finally {
      dispatch(loadingDone());
    }
  };
};

export const fetchGetSimilar = (id, media_type) => {
  return async dispatch => {
    dispatch(loading());
    try {
      await axios
        .get(`${url}/${media_type}/${id}/similar?api_key=${apikey}`)
        .then(res => {
          const data = res.data;
          dispatch(getMoviesSimilarSuccess(data.results));
        });
    } catch (error) {
      dispatch(getMoviesSimilarFailure(error));
      console.log(error);
    } finally {
      dispatch(loadingDone());
    }
  };
};

function getMoviesVideosSuccess(data) {
  return {
    type: TYPES.GET_MOVIES_VIDEOS_SUCCESS,
    data,
  };
}

function getMoviesVideosFailure(err) {
  return {
    type: TYPES.ERROR,
    err,
  };
}
function getMoviesSimilarSuccess(data) {
  return {
    type: TYPES.GET_MOVIES_SIMILAR_SUCCESS,
    data,
  };
}

function getMoviesSimilarFailure(err) {
  return {
    type: TYPES.ERROR,
    err,
  };
}

function getDetailMoviesSuccess(data) {
  return {
    type: TYPES.GET_MOVIES_BY_ID_SUCCESS,
    data,
  };
}

function getDetailMoviesFailure(err) {
  return {
    type: TYPES.ERROR,
    err,
  };
}
function getMoviesReviewsSuccess(data) {
  return {
    type: TYPES.GET_MOVIES_REVIEWS_SUCCESS,
    data,
  };
}

function getMoviesReviewsFailure(err) {
  return {
    type: TYPES.ERROR,
    err,
  };
}

function getMoviesRecommendedSuccess(data) {
  return {
    type: TYPES.GET_MOVIES_RECOMMENDED_SUCCESS,
    data,
  };
}

function getMoviesRecommendedFailure(err) {
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

export default fetchGetDetailMovies;
