import React, {Component} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import ProductItem from './ProductItem';

export default class ListProduct extends Component {
  render() {
    const {data} = this.props;

    return (
      <FlatList
        data={data}
        renderItem={({item}) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      />
    );
  }
}
