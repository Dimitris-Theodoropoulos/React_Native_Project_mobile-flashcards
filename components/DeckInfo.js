import React, {Component} from 'react'
import styled from 'styled-components/native'
import { connect } from 'react-redux'


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
    render() {
        const {title, navigation} = this.props
        const numberOfCards = this.props.decks[title].numberOfCards
        return (
            <DeckView>
                <DeckBtn onPress={() => navigation.navigate('Deck', {title: title})}>
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

function mapStateToProps (decks) {
    return {
        decks,
    }
}

export default connect (
    mapStateToProps
)(DeckInfo)
