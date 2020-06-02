import React from 'react';
import {View, ScrollView} from 'react-native';
import Popular from '../Popular';
import Trending from '../Trending';
import Top from '../TopRated';
import Play from '../NowPlaying';
import Airing from '../TvAiring';
import Upcoming from '../Upcoming';
import Ontv from '../OnTV';
import Logo from '../../../assets/svg/logo';
import styles from './styles';

export default class Component extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.conLogo}>
          <View style={styles.imgLogo}>
            <Logo />
          </View>
        </View>
        <ScrollView>
          <View>
            <Popular navigation={this.props.navigation} />
            <Trending navigation={this.props.navigation} />
            <Top navigation={this.props.navigation} />
            <Play navigation={this.props.navigation} />
            <Airing navigation={this.props.navigation} />
            <Upcoming navigation={this.props.navigation} />
            <Ontv navigation={this.props.navigation} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
