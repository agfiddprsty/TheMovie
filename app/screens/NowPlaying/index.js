import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from './action';
import Component from './component';

function mapStateToProps(state) {
  const {listPlay, isLoading, error} = state.play;
  return {
    listPlay,
    isLoading,
    error,
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
