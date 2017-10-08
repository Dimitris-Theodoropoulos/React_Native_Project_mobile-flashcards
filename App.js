import React from 'react';
import { Text, View } from 'react-native';
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import { Constants } from 'expo'
import { TabNavigator } from 'react-navigation'

const Tabs = TabNavigator({
  Deck: {
    screen: Deck,
    navigationOptions: {
      tabBarLabel: 'Deck',
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      tabBarLabel: 'Quiz'
    }
  }
}, {
  tabBarOptions: {
    style: {
      height: 56,
      backgroundColor: 'rgb(240,230,140)',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{height: Constants.statusBarHeight}} />
        <Tabs />
      </View>
    );
  }
}
