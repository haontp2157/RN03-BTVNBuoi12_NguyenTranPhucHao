import React, {Component} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Wanda from '../images/wanda.jpg';
import Yasuo from '../images/yasuo.jpg';
import Captain from '../images/captain.jpg';
import Flash from '../images/flash.jpg';
import FriendRecentlyCard from './FriendRecentlyCard';

export default class FlatListRecently extends Component {
  mockupFriendRecently = [
    {
      id: 1,
      name: 'Wanda',
      avatar: Wanda,
    },
    {
      id: 2,
      name: 'Yasuo',
      avatar: Yasuo,
    },
    {
      id: 3,
      name: 'Captain',
      avatar: Captain,
    },
    {
      id: 4,
      name: 'Flash',
      avatar: Flash,
    },
    {
      id: 6,
      name: 'Wanda',
      avatar: Wanda,
    },
  ];

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.mockupFriendRecently}
          renderItem={({item}) => <FriendRecentlyCard friend={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});
