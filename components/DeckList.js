import React, { Component } from 'react'
import { FlatList } from 'react-native'
import styled from 'styled-components/native'
import DeckInfo from './DeckInfo'

const mockDecks = [
  {
    title: 'react',
    numberOfCards: 3
  },
  {
    title: 'redux',
    numberOfCards: 4
  },
  {
    title: 'udacity',
    numberOfCards: 5
  },
  {
    title: 'okeptok',
    numberOfCards: 5
  },
  {
    title: 'udavvdvsvcity',
    numberOfCards: 5
  }
]

const MainView = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: center;
  background-color: white;
`

class DeckList extends Component {

  renderItem = ({ item }) => {
    return (
      <DeckInfo
        title={item.title}
        numberOfCards={item.numberOfCards}
        navigation={this.props.navigation}
      />
    )
  }

  render () {
    return (
      <MainView>
        <FlatList
          data={mockDecks}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
        />
      </MainView>
    )
  }
}

export default DeckList
