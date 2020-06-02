/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Router from './app/routers';
import store from './app/store/configureStore';

export default class App extends Component {
  render() {
    return (
      <Provider store={store()}>
        <Router />
      </Provider>
    );
  }
}
