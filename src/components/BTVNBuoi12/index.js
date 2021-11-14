import axios from 'axios';
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Category from './Category';
import Header from './Header';
import ListDiscount from './ListDiscount';
import ListProduct from './ListProduct';

export default class BTVNBuoi12 extends Component {
  state = {
    listCategory: [],
    listProduct: [],
  };
  componentDidMount() {
    const getAllCategory = axios({
      url: 'http://svcy3.myclass.vn/api/Product/getAllCategory',
      method: 'GET',
    });
    const getAllProduct = axios({
      url: 'http://svcy3.myclass.vn/api/Product',
      method: 'GET',
    });
    Promise.all([getAllCategory, getAllProduct])
      .then(([resultCategory, resultProduct]) => {
        const listCategory = resultCategory.data.content;
        console.log(listCategory);
        const listProduct = resultProduct.data.content;
        this.setState({
          listCategory,
          listProduct,
        });
      })
      .catch(err => console.log(err));
  }

  //https://dribbble.com/shots/15060393-Shoe-Selling-App

  render() {
    const {listCategory, listProduct} = this.state;
    return (
      <View style={styles.container}>
        <Header />
        <ListDiscount />
        <Category data={listCategory} />
        <ListProduct data={listProduct} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7F7',
  },
});
