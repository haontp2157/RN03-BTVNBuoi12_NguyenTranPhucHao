import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class Category extends Component {
  state = {
    selectedCategory: 'ADIDAS',
  };

  onChangeCategory = category => {
    this.setState({selectedCategory: category});
  };

  renderCategoryItem = item => {
    return (
      <TouchableOpacity
        style={[
          styles.categoryItem,
          this.state.selectedCategory === item.category &&
            styles.categoryItemSelected,
        ]}
        activeOpacity={1}
        onPress={() => this.onChangeCategory(item.category)}>
        <Text
          style={[
            styles.categoryItemText,
            this.state.selectedCategory === item.category &&
              styles.categoryItemTextSelected,
          ]}>
          {item.category}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    const {data} = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.categoryList}
          data={data}
          renderItem={({item}) => this.renderCategoryItem(item)}
          keyExtractor={item => item.category}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingVertical: 16,
  },
  categoryList: {
    flexGrow: 0,
  },
  categoryItem: {
    padding: 8,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 8,
  },
  categoryItemSelected: {
    backgroundColor: '#F96C05',
  },
  categoryItemText: {
    color: '#000',
    fontWeight: '600',
  },
  categoryItemTextSelected: {
    color: '#fff',
  },
});
