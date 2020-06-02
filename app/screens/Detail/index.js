import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from './action';
import Component from './component';

function mapStateToProps(state) {
  const {
    detailMovie,
    isLoading,
    error,
    listVideo,
    listReviews,
    listRecommend,
    listSimilar,
  } = state.detail;
  return {
    detailMovie,
    isLoading,
    error,
    listVideo,
    listReviews,
    listRecommend,
    listSimilar,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
