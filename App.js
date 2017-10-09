import React from 'react';
import { Text, View } from 'react-native';
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import { Constants } from 'expo'
import { TabNavigator, StackNavigator } from 'react-navigation'
import AddDeck from './components/AddDeck'
import DeckList from './components/DeckList'
import { Entypo, Ionicons } from '@expo/vector-icons'
import AddCard from './components/AddCard'

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'DECKS',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-list-box-outline' size={30} color={tintColor} />
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'NEW DECK',
      tabBarIcon: ({ tintColor }) => <Entypo name='add-to-list' size={30} color={tintColor} />
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: 'black',
    style: {
      height: 56,
      backgroundColor: 'white',
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

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      title: 'Home',
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTitleStyle: {
        fontSize: 25
      }
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      title: 'Deck Details',
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: 'white'
      },
      headerTitleStyle: {
        fontSize: 25
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add card',
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: 'white'
      },
      headerTitleStyle: {
        fontSize: 25
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz!',
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: 'white'
      },
      headerTitleStyle: {
        fontSize: 25
      }
    }
  },
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{height: Constants.statusBarHeight}} />
        <MainNavigator />
      </View>
    );
  }
}
