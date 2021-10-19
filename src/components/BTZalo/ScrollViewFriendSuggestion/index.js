import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import FriendSuggestionCard from './FriendSuggestionCard';
import Wanda from '../images/wanda.jpg';
import Yasuo from '../images/yasuo.jpg';
import Strange from '../images/strange.jpg';
import Kara from '../images/suppergirl.jpg';
import Diana from '../images/wonderwoman.jpg';
import Natasha from '../images/blackwidow.jpeg';

export default class ScrollViewFriendSuggestion extends Component {
  mockupFriendSuggestion = [
    {
      id: 1,
      name: 'Strange',
      avatar: Strange,
      mutualfriends: '10',
    },
    {
      id: 2,
      name: 'Kara',
      avatar: Kara,
      mutualfriends: '10',
    },
    {
      id: 3,
      name: 'Diana',
      avatar: Diana,
      mutualfriends: '10',
    },
    {
      id: 4,
      name: 'Natasha',
      avatar: Natasha,
      mutualfriends: '10',
    },
    {
      id: 5,
      name: 'Wanda',
      avatar: Wanda,
      mutualfriends: '10',
    },
    {
      id: 6,
      name: 'Yasuo',
      avatar: Yasuo,
      mutualfriends: '10',
    },
  ];
  renderItem = () => {
    return this.mockupFriendSuggestion.map(item => {
      return <FriendSuggestionCard friend={item} key={item.id} />;
    });
  };
  render() {
    return <ScrollView>{this.renderItem()}</ScrollView>;
  }
}
