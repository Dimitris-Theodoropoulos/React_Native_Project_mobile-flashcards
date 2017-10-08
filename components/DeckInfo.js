import React, { Component } from 'react'
import styled from 'styled-components/native'


const DeckView = styled.View`
  flex: 1;
  border: solid gray;
  background-color: white;
`

const DeckBtn = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
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

class DeckInfo extends Component {
  render () {
    const { title, numberOfCards, navigation } = this.props
    return (
      <DeckView>
        <DeckBtn onPress={() => navigation.navigate('Deck')}>
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
}

export default DeckInfo
