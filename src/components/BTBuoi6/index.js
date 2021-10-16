import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import iconLike from './images/like.png';
import iconLove from './images/love.png';
import iconAngry from './images/angry.png';
import iconHaha from './images/haha.png';
import iconSad from './images/sad.png';
import iconCare from './images/care.png';

export default class BTBuoi6 extends Component {
  listEmoji = [
    {
      type: 'like',
      emoji: iconLike,
    },
    {
      type: 'love',
      emoji: iconLove,
    },
    {
      type: 'angry',
      emoji: iconAngry,
    },
    {
      type: 'haha',
      emoji: iconHaha,
    },
    {
      type: 'sad',
      emoji: iconSad,
    },
    {
      type: 'care',
      emoji: iconCare,
    },
  ];

  state = {
    selectedEmoji: this.listEmoji[0],
  };

  onChooseEmoji = objEmoji => {
    this.setState({selectedEmoji: objEmoji});
  };

  RenderListEmoji = () =>
    this.listEmoji.map((item, index) => (
      <TouchableWithoutFeedback
        key={index}
        onPress={() => this.onChooseEmoji(item)}>
        <Image style={styles.emojiItem} source={item.emoji} />
      </TouchableWithoutFeedback>
    ));

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.questionText}>Bạn đang cảm thấy như thế nào?</Text>
        <Image
          source={this.state.selectedEmoji.emoji}
          style={styles.emojiSelected}
        />
        <View style={styles.emojiContainer}>{this.RenderListEmoji()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '600',
  },
  emojiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  emojiSelected: {
    width: 120,
    height: 120,
    marginVertical: 20,
  },
  emojiItem: {
    height: 30,
    width: 30,
    marginHorizontal: 10,
  },
});
