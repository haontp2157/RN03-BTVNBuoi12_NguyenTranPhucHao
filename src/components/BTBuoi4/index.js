import React, {Component} from 'react';
import {Text, View} from 'react-native';

class BTBuoi4 extends Component {
  render() {
    const {bgColor, title} = this.props;
    return (
      <View
        style={{
          width: '100%',
          height: 150,
          backgroundColor: bgColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 16,
          marginBottom: 20,
        }}>
        <Text style={{color: '#000000', fontWeight: '600'}}>{title}</Text>
      </View>
    );
  }
}

export default BTBuoi4;
