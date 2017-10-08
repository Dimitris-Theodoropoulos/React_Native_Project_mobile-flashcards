import React, { Component } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

const MainView = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: space-around;
  background-color: white
`

const ViewWrapper = styled.View`
  flex: 1;
  padding: 20% 5% 20% 5%;
`

const DeckTitleView = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`

const DeckTitleInput = styled.TextInput`
  flex: 1;
  border: solid black;
`

const BtnWrapper = styled.View`
  flex: 1;
  padding: 20% 35% 35% 35%;
`

const Submit = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  border: solid black;
  align-items: center;
  justify-content: center;
  margin-top: 15%;
  background-color: rgb(105,105,105);
`

class AddDeck extends Component {
  state = {
    deckInput: 'Deck Title'
  }
  render () {
    return (
      <MainView>
        <DeckTitleView>
          <Text style={{flex: 1, fontSize: 45}}>What is the title of your new deck?</Text>
        </DeckTitleView>
        <ViewWrapper>
          <DeckTitleInput
            value={this.state.deckInput}
            onChangeText={(text) => this.setState({ deckInput: text })}
          />
        </ViewWrapper>
        <BtnWrapper>
          <Submit>
            <Text style={{flex: 1, color: 'white', fontSize: 25}}>Submit</Text>
          </Submit>
        </BtnWrapper>
      </MainView>
    )
  }
}

export default AddDeck
