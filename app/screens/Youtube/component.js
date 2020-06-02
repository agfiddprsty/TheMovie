import React from 'react';
import {View, Text} from 'react-native';
import YouTube from 'react-native-youtube';
import styles from './styles';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: '',
    };
  }
  componentDidMount() {
    this._data();
  }

  _data = async () => {
    try {
      const {navigation} = this.props;
      const videoId = await navigation.getParam('videoId', '');
      this.setState({videoId});
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <YouTube
          apiKey="AIzaSyAFF573cVHBhew35GfyBUF25T0PAtgCoOY"
          videoId={this.state.videoId} // The YouTube video ID
          play
          style={styles.conYtb}
        />
      </View>
    );
  }
}
