import React from 'react';
import {View, Image, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 'day',
    };
  }
  async componentDidMount() {
    const {actions} = this.props;
    await actions.fetchGetTrending(this.state.time);
  }

  _changeCategories = async time => {
    const {actions} = this.props;
    this.setState({time: time});
    await actions.fetchGetTrending(time);
  };

  _toDetail = (id, media_type) => {
    this.props.navigation.navigate('Detail', {id, media_type});
  };

  render() {
    const {listTrending} = this.props;
    return (
      <View>
        <View style={styles.conFlat}>
          <View style={[styles.conRow, styles.mrBot]}>
            <Text style={styles.txtTitle}>Trending</Text>
            {this.state.time === 'day' ? (
              <View style={styles.btnPopular}>
                <TouchableOpacity
                  onPress={() => this._changeCategories('day')}
                  style={styles.btnRadioActive}>
                  <Text style={styles.colorWhite}>Today</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this._changeCategories('week')}
                  style={styles.btnRadio}>
                  <Text style={styles.colorWhite}>This Week</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.btnPopular}>
                <TouchableOpacity
                  onPress={() => this._changeCategories('day')}
                  style={styles.btnRadio}>
                  <Text style={styles.colorWhite}>Today</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this._changeCategories('week')}
                  style={styles.btnRadioActive}>
                  <Text style={styles.colorWhite}>This Week</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <FlatList
            data={listTrending}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.conRow}
            renderItem={({item}) => (
              <TouchableOpacity
                key={item.id}
                style={styles.boxFilm}
                onPress={() => this._toDetail(item.id, item.media_type)}>
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
