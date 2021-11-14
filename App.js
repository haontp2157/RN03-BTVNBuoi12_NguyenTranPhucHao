/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import BTVNBuoi12 from './src/components/BTVNBuoi12';
// import {View} from 'react-native';
// import BTBuoi6 from './src/components/BTBuoi6';
import BTZalo from './src/components/BTZalo';
// import BTBuoi4 from './src/components/BTBuoi4';

class App extends React.Component {
  render() {
    return (
      // BTBuoi4
      // <View style={{padding: 20}}>
      //   <BTBuoi4 bgColor="#C9C9FF" title="Purple: #C9C9FF" />
      //   <BTBuoi4 bgColor="#3D85C6" title="Blue: #3D85C6" />
      //   <BTBuoi4 bgColor="#96CC96" title="Green: #96CC96" />
      //   <BTBuoi4 bgColor="#F4B940" title="Yellow: #F4B940" />
      // </View>

      // BTBuoi6
      // <BTBuoi6 />

      //BTZalo
      // <BTZalo />

      //BTVNBuoi12
      <BTVNBuoi12 />
    );
  }
}

export default App;
