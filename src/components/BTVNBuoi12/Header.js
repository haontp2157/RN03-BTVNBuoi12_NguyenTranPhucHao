import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <FeatherIcon name="align-left" style={styles.icon} />
        </TouchableOpacity>
        <Image
          source={{
            uri: 'https://www.kindpng.com/picc/m/18-185354_jorge-blanco-jacob-sartorius-disney-channel-ruggero-young.png',
          }}
          style={styles.avatar}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  icon: {
    fontSize: 24,
    color: '#000000',
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 12,
  },
});
