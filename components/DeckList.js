import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import styled from 'styled-components/native'

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
`

const DeckView = styled.View`
  flex: 1;
  border: solid gray;
`

const DeckBtn = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 20% 0% 20% 0%;
`

const DeckTitle = styled.Text`
  font-size: 30;
  color: black;
`

const DeckCards = styled.Text`
  font-size: 20;
  color: gray;
`

function Deck ({ title, numberOfCards }) {
  return (
    <DeckView>
      <DeckBtn>
        <DeckTitle>
          {title}
        </DeckTitle>
        <DeckCards>
          {numberOfCards} cards
        </DeckCards>
      </DeckBtn>
    </DeckView>
  )
}

class DeckList extends Component {

  renderItem = ({ item }) => {
    return <Deck {...item} />
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
