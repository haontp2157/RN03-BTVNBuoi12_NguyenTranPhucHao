import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class FriendSuggestionCard extends Component {
  state = {
    unFriend: false,
  };

  onPress = () => {
    this.setState({
      unFriend: !this.state.unFriend,
    });
  };

  render() {
    const {friend} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image style={styles.avatar} source={friend.avatar} />
          <View>
            <Text style={styles.name}>{friend.name} </Text>
            <Text style={styles.mutualfriends}>
              {friend.mutualfriends} bạn chung
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={[
            styles.btn,
            this.state.unFriend ? styles.unFriend : styles.makeFriend,
          ]}
          onPress={this.onPress}>
          <Text style={styles.btnText}>
            {this.state.unFriend ? 'Hủy kết bạn' : 'Kết bạn'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    backgroundColor: '#eeeeee',
    borderRadius: 8,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    paddingBottom: 2,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginBottom: 8,
    marginRight: 8,
  },
  mutualfriends: {
    color: '#000000',
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
  },
  btn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  unFriend: {
    backgroundColor: '#FF6666',
  },
  makeFriend: {
    backgroundColor: '#bbf',
  },
  btnText: {
    fontSize: 16,
    color: '#000000',
  },
});
