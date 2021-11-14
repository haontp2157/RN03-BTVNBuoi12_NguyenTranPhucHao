import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {purpleShoe, whiteShoe} from './images';

export default class ListDiscount extends Component {
  renderDiscountItem = ({item}) => {
    return (
      <View style={styles.discountItemContainer}>
        <View
          style={[
            styles.discountItemContent,
            {
              backgroundColor: item.color,
            },
          ]}
        />
        <View style={styles.discountInfo}>
          <Text style={styles.discountTitle}>{item.title}</Text>
          <Text style={styles.discountText}>Discount</Text>
        </View>
        <Image
          source={item.image}
          resizeMode="contain"
          style={styles.discountImage}
        />
      </View>
    );
  };
  render() {
    const data = [
      {
        id: 1,
        title: '49%',
        image: purpleShoe,
        color: '#FAB562',
      },
      {
        id: 2,
        title: '49%',
        image: whiteShoe,
        color: '#BF81EF',
      },
    ];

    return (
      <View>
        <FlatList
          data={data}
          renderItem={this.renderDiscountItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          style={{flexGrow: 0}}
          horizontal
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  discountItemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 16,
    alignItems: 'center',
    marginHorizontal: 12,
    paddingTop: 12,
    width: 300,
  },
  discountItemContent: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    right: 0,
    bottom: 0,
    borderRadius: 16,
  },
  discountInfo: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: '50%',
  },
  discountTitle: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 24,
  },
  discountText: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 20,
  },
  discountImage: {
    marginTop: -24,
    width: '50%',
    height: '100%',
  },
});
