/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import DemoCard from './src/components/DemoCard';

class App extends React.Component {
  render() {
    return (
      <View style={{padding: 20}}>
        <DemoCard bgColor="#C9C9FF" title="Purple: #C9C9FF" />
        <DemoCard bgColor="#3D85C6" title="Blue: #3D85C6" />
        <DemoCard bgColor="#96CC96" title="Green: #96CC96" />
        <DemoCard bgColor="#F4B940" title="Yellow: #F4B940" />
      </View>
    );
  }
}

export default App;
