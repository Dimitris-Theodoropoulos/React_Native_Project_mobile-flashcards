import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
//55% margin-top
const CenterView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 40%;
`

const AddCard = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 70%;
  margin-left: 10%;
  margin-right: 10%;
  background-color: white;
  padding: 10%;
  border: solid black;
`

const StartQuiz = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10%;
  background-color: black;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 2%;
`

class Deck extends Component {
  render () {
    return (
      <View>
        <CenterView>
          <Text style={{fontSize: 25, color: 'black'}}>Title</Text>
          <Text>Number of cards</Text>
        </CenterView>
        <AddCard>
          <Text style={{color: 'black', fontSize: 20}}>Add Card</Text>
        </AddCard>
        <StartQuiz>
          <Text style={{color: 'white', fontSize: 20}}>Start Quiz</Text>
        </StartQuiz>
      </View>
    )
  }
}

export default Deck
