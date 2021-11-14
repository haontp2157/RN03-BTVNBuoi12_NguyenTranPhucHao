import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

export default class ProductItem extends Component {
  state = {
    isAddToCart: false,
  };

  onAddToCart = () => {
    this.setState({
      isAddToCart: true,
    });
  };

  render() {
    const {item} = this.props;
    const {isAddToCart} = this.state;
    const {width} = Dimensions.get('window');
    const itemWidth = (width - 48) / 2;

    return (
      <View
        style={[
          styles.productItem,
          {
            minWidth: itemWidth,
            maxWidth: itemWidth,
          },
        ]}>
        <View style={styles.productTop}>
          <Image
            source={{uri: item.image}}
            style={styles.productImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.productFooter}>
          <Text style={styles.productText}>{item.name}</Text>
          <View style={styles.productAction}>
            <Text style={styles.productPrice}>${item.price}</Text>
            <TouchableOpacity
              style={styles.productAddCart}
              activeOpacity={1}
              onPress={this.onAddToCart}>
              <AntDesignIcon
                name={isAddToCart ? 'check' : 'plus'}
                size={20}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  productItem: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 12,
    height: 200,
    borderRadius: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  productTop: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
  },
  productImage: {
    width: '100%',
    height: 80,
  },
  productFooter: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  productText: {
    paddingHorizontal: 16,
    color: '#000',
    fontSize: 14,
  },
  productPrice: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    paddingHorizontal: 16,
  },
  productAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productAddCart: {
    backgroundColor: '#FFAE39',
    borderBottomRightRadius: 16,
    borderTopLeftRadius: 10,
    padding: 8,
  },
});
