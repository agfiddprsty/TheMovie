import React from 'react';
import {View, Image, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: 'movie',
    };
  }
  async componentDidMount() {
    const {actions} = this.props;
    await actions.fetchGetPopular(this.state.movies);
  }

  _changeCategories = async categories => {
    const {actions} = this.props;
    this.setState({movies: categories});
    await actions.fetchGetPopular(categories);
  };

  _toDetail = (id, media_type) => {
    this.props.navigation.navigate('Detail', {id, media_type});
  };

  render() {
    const {listPopular} = this.props;
    return (
      <View>
        <View style={styles.conFlat}>
          <View style={[styles.conRow, styles.mrBot]}>
            <Text style={styles.txtTitle}>Popular</Text>
            {this.state.movies === 'movie' ? (
              <View style={styles.btnPopular}>
                <TouchableOpacity
                  onPress={() => this._changeCategories('movie')}
                  style={styles.btnRadioActive}>
                  <Text style={styles.colorWhite}>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this._changeCategories('tv')}
                  style={styles.btnRadio}>
                  <Text style={styles.colorWhite}>TV</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.btnPopular}>
                <TouchableOpacity
                  onPress={() => this._changeCategories('movie')}
                  style={styles.btnRadio}>
                  <Text style={styles.colorWhite}>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this._changeCategories('tv')}
                  style={styles.btnRadioActive}>
                  <Text style={styles.colorWhite}>TV</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <FlatList
            data={listPopular}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.conRow}
            renderItem={({item}) => (
              <TouchableOpacity
                key={item.id}
                style={styles.boxFilm}
                onPress={() => this._toDetail(item.id, this.state.movies)}>
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
    );
  }
}
