import React, { Component } from 'react'
import styled from 'styled-components/native'

const MainView = styled.View`
  flex: 1;
  align-items: center;
  background-color: white
`

const DeckTitleInput = styled.TextInput`
  border: solid black;
  width: 90%;
  height: 8%;
  margin-top: 20%;
`

const Submit = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border: solid black;
  margin-top: 25%;
  background-color: rgb(105,105,105);
  width: 40%;
  height: 12%;
`

const SubmitText = styled.Text`
  color: white;
  font-size: 25;
`

const DeckText = styled.Text`
  flex: 1;
  font-size: 45;
`

const DeckTextWrapper = styled.View`
  width: 90%;
  height: 30%;
  padding-top: 15%;
`

class AddDeck extends Component {
  state = {
    deckInput: 'Enter deck title'
  }

  handleDeckTitle = (e) => {
    e.preventDefault()
    this.setState({ deckInput: e.target.value })
  }

  render () {
    return (
      <MainView>
        <DeckTextWrapper>
          <DeckText>
            What is the title of your new deck?
          </DeckText>
        </DeckTextWrapper>
        <DeckTitleInput
          value={this.state.deckInput}
          onChange={this.handleDeckTitle}
        />
        <Submit>
          <SubmitText>
            Submit
          </SubmitText>
        </Submit>
      </MainView>
    )
  }
}

export default AddDeck
