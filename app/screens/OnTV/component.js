import React from 'react';
import {View, Image, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';

export default class Component extends React.Component {
  async componentDidMount() {
    const {actions} = this.props;
    await actions.fetchGetOn();
  }

  _toDetail = (id, media_type) => {
    this.props.navigation.navigate('Detail', {id, media_type});
  };

  render() {
    const {listOn} = this.props;
    return (
      <View>
        <View style={styles.conFlat}>
          <View style={[styles.conRow, styles.mrBot]}>
            <Text style={styles.txtTitle}>TV Shows On The Air</Text>
          </View>
          <FlatList
            data={listOn}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.conRow}
            renderItem={({item}) => (
              <TouchableOpacity
                key={item.id}
                style={styles.boxFilm}
                onPress={() => this._toDetail(item.id, 'tv')}>
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
