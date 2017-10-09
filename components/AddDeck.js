import React, { Component } from 'react'
import styled from 'styled-components/native'
import { connect } from 'react-redux'
import { saveDeckTitleAction } from '../actions'

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
    title: ''
  }

  handleSubmit = (title) => {
    this.props.dispatch(saveDeckTitleAction({ title: title }))
    this.setState({ title: '' })
    this.props.navigation.navigate('DeckList')
  }

  render () {
    const { title } = this.state
    return (
      <MainView>
        <DeckTextWrapper>
          <DeckText>
            What is the title of your new deck?
          </DeckText>
        </DeckTextWrapper>
        <DeckTitleInput
          placeholder='Enter deck title'
          value={this.state.title}
          onChangeText={(text) => this.setState({ title: text })}
        />
        <Submit onPress={() => this.handleSubmit(title)}>
          <SubmitText>
            Submit
          </SubmitText>
        </Submit>
      </MainView>
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
)(AddDeck)
