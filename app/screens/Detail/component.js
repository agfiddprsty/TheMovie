import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Linking,
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Logo from '../../../assets/svg/logoFooter';
import styles from './styles';
import {COLOR_LIGHT_BLACK, COLOR_BLACK} from '../../styles';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      media_type: '',
      genres: [],
      expand: false,
    };
  }

  componentDidMount() {
    this._data();
  }

  _data = async () => {
    try {
      const {navigation, actions} = this.props;
      const id = await navigation.getParam('id', 0);
      const media_type = await navigation.getParam('media_type', 'default');
      this.setState({id, media_type});
      await actions.fetchGetDetailMovies(id, media_type);
      await actions.fetchGetVideos(id, media_type);
      await actions.fetchGetReview(id, media_type);
      await actions.fetchGetRecommended(id, media_type);
      await actions.fetchGetSimilar(id, media_type);
      this.setState({genres: this.props.detailMovie.genres});
    } catch (error) {
      console.log(error);
    }
  };

  _toDetail = async (id, media_type) => {
    try {
      const {actions} = this.props;
      await actions.fetchGetDetailMovies(id, media_type);
      await actions.fetchGetVideos(id, media_type);
      await actions.fetchGetReview(id, media_type);
      await actions.fetchGetRecommended(id, media_type);
      await actions.fetchGetSimilar(id, media_type);
      this.setState({genres: this.props.detailMovie.genres});
    } catch (error) {
      console.log(error);
    }
  };

  _playVideo = videoId => {
    this.props.navigation.navigate('Youtube', {videoId});
  };

  render() {
    const {
      detailMovie,
      listVideo,
      listReviews,
      listRecommend,
      listSimilar,
    } = this.props;
    return (
      <ParallaxScrollView
        backgroundColor={COLOR_BLACK}
        contentBackgroundColor={COLOR_LIGHT_BLACK}
        stickyHeaderHeight={60}
        parallaxHeaderHeight={350}
        renderStickyHeader={() => (
          <View key="sticky-header" style={styles.stickySection}>
            {this.state.media_type === 'tv' ? (
              <Text style={styles.txtTitle}>{detailMovie.name}</Text>
            ) : (
              <Text style={styles.txtTitle}>{detailMovie.title}</Text>
            )}
          </View>
        )}
        renderBackground={() => (
          <View key="background" style={styles.backgroundHeader}>
            <Image
              style={styles.imgBack}
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${
                  detailMovie.backdrop_path
                }`,
              }}
            />
          </View>
        )}
        renderForeground={() => (
          <View key="parallax-header" style={styles.parallaxHeader}>
            <Image
              style={styles.avatar}
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${
                  detailMovie.poster_path
                }`,
              }}
            />
            {this.state.media_type === 'tv' ? (
              <View style={styles.conTxtHead}>
                <Text style={styles.txtInfo}>Title: {detailMovie.name}</Text>
                <Text style={styles.txtInfo}>
                  Release: {detailMovie.first_air_date}
                </Text>
                <Text style={styles.txtInfo}>
                  Runtime: {detailMovie.episode_run_time} Minutes
                </Text>
                <Text style={styles.txtInfo}>
                  Rating: {detailMovie.vote_average} / 10
                </Text>
              </View>
            ) : (
              <View style={styles.conTxtHead}>
                <Text style={styles.txtInfo}>Title: {detailMovie.title}</Text>
                <Text style={styles.txtInfo}>
                  Release: {detailMovie.release_date}
                </Text>
                <Text style={styles.txtInfo}>
                  Runtime: {detailMovie.runtime} Minutes
                </Text>
                <Text style={styles.txtInfo}>
                  Rating: {detailMovie.vote_average} / 10
                </Text>
                <Text style={styles.txtInfo}>
                  Budget: {detailMovie.budget} USD
                </Text>
              </View>
            )}
          </View>
        )}>
        <View style={styles.container}>
          <View style={styles.conRow}>
            <Text style={styles.txtTitle}>Genres: </Text>
            {this.state.genres.map(item => (
              <Text style={styles.txtInfo}> - {item.name}</Text>
            ))}
          </View>
          <View style={styles.conRow}>
            <Text style={styles.txtTitle}>Overview: </Text>
            <Text style={styles.txtOverview}>{detailMovie.overview}</Text>
          </View>
          <View style={styles.conRow}>
            <Text style={styles.txtTitle}>Homepage: </Text>
            <TouchableOpacity
              onPress={() => Linking.openURL(detailMovie.homepage)}>
              <Text style={styles.txtOverview}>{detailMovie.homepage}</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.txtTitle}>Videos: </Text>
            {listVideo.length > 0 ? (
              <FlatList
                data={listVideo}
                style={styles.conYtb}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <View>
                    <TouchableOpacity
                      style={styles.conBtnVideo}
                      onPress={() => this._playVideo(item.key)}>
                      <Text style={styles.txtOverview}>{item.name}</Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
            ) : (
              <Text style={styles.txtOverview}>No Videos Available</Text>
            )}
          </View>
          <View>
            <Text style={styles.txtTitle}>Reviews: </Text>
            {listReviews.length > 0 ? (
              <FlatList
                data={listReviews}
                style={styles.conYtb}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <View>
                    {this.state.expand ? (
                      <TouchableOpacity
                        style={styles.conBtnReview}
                        onPress={() =>
                          this.setState({expand: !this.state.expand})
                        }>
                        <View style={styles.headReview}>
                          <View style={styles.conLogo}>
                            <Logo />
                          </View>
                          <Text style={styles.txtOverview}>{item.author}</Text>
                        </View>
                        <View>
                          <Text style={styles.txtOverview}>{item.content}</Text>
                        </View>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        style={styles.conBtnReviewHalf}
                        onPress={() =>
                          this.setState({expand: !this.state.expand})
                        }>
                        <View style={styles.headReview}>
                          <View style={styles.imgLogo}>
                            <Logo />
                          </View>
                          <Text style={styles.txtOverview}>{item.author}</Text>
                        </View>
                        <View>
                          <Text style={styles.txtOverview}>{item.content}</Text>
                        </View>
                      </TouchableOpacity>
                    )}
                  </View>
                )}
              />
            ) : (
              <Text style={styles.txtOverview}>No Reviews Available</Text>
            )}
          </View>
          <View>
            <Text style={styles.txtTitle}>Recommendation Movies: </Text>
            <FlatList
              data={listRecommend}
              style={styles.conYtb}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.conRow}
              renderItem={({item}) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.boxFilm}
                  onPress={() =>
                    this._toDetail(item.id, this.state.media_type)
                  }>
                  <View>
                    <Image
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500/${
                          item.poster_path
                        }`,
                      }}
                      style={styles.film}
                    />
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <View>
            <Text style={styles.txtTitle}>Similar Movies: </Text>
            <FlatList
              data={listSimilar}
              style={styles.conYtb}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.conRow}
              renderItem={({item}) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.boxFilm}
                  onPress={() =>
                    this._toDetail(item.id, this.state.media_type)
                  }>
                  <View>
                    <Image
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500/${
                          item.poster_path
                        }`,
                      }}
                      style={styles.film}
                    />
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </ParallaxScrollView>
    );
  }
}
