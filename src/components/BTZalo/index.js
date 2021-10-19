import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ScrollViewFriendSuggestion from './ScrollViewFriendSuggestion';
import FlatListRecently from './FlatListRecently';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

export default class BTZalo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <EntypoIcon name="back-in-time" style={[styles.title, styles.icon]} />
          <Text style={styles.title}>Danh sách tìm kiếm gần đây</Text>
        </View>
        <FlatListRecently />
        <View style={styles.wrapper}>
          <IoniconsIcon name="ios-people" style={[styles.title, styles.icon]} />
          <Text style={styles.title}>Gợi ý kết bạn</Text>
        </View>
        <ScrollViewFriendSuggestion />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 70,
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginBottom: 8,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '700',
  },
});
