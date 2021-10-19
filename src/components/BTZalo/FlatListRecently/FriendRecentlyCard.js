import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default class FriendRecentlyCard extends Component {
  render() {
    const {friend} = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={friend.avatar} />
        <Text style={styles.name}>{friend.name} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginBottom: 8,
  },
  name: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
  },
});
