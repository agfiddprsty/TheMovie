import React from 'react';
import {View, Platform, StatusBar} from 'react-native';

import styles from './styles';
import {COLOR_WHITE} from '../../../styles';

export default class Component extends React.Component {
  render() {
    if (Platform.OS === 'ios') {
      return <View style={styles.statusBar} />;
    }
    return <StatusBar backgroundColor={COLOR_WHITE} />;
  }
}
