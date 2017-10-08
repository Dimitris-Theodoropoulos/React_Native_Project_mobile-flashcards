import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const MainView = styled.View`
  flex: 3;
  align-items: center;
  justify-content: space-around;
`

const IndexText = styled.Text`
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: 25;
`

const QuestionText = styled.Text`
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: 30;
`

const AnswerBtn = styled.TouchableOpacity`
  flex: 1;
`

const BtnView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  margin: 5% 10% 2% 10%;
`

const CorrectBtn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: green;
  padding: 0% 26% 0% 26%;
`

const IncorrectBtn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
  background-color: red;
  padding: 0% 24% 0% 24%;
`

const AnswerText = styled.Text`
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: 30;
`

const QuestionBtn = styled.TouchableOpacity`
  flex: 1;
`

class Quiz extends Component {
  state = {
    toggleView: 'question'
  }
  render () {
    const { toggleView } = this.state
    if (toggleView === 'question') {
      return (
        <View style={{flex: 1}}>
          <MainView>
            <IndexText>2/2</IndexText>
            <QuestionText>
              What is your favorite movie?
            </QuestionText>
            <AnswerBtn onPress={() => this.setState({ toggleView: 'answer' })}>
              <Text style={{fontSize: 25, color: 'red'}}>Answer</Text>
            </AnswerBtn>
          </MainView>
          <BtnView>
            <CorrectBtn>
              <Text style={{color: 'white', fontSize: 25}}>Correct</Text>
            </CorrectBtn>
            <IncorrectBtn>
              <Text style={{color: 'white', fontSize: 25}}>Incorrect</Text>
            </IncorrectBtn>
          </BtnView>
        </View>
      )
    }
    if (toggleView === 'answer') {
      return (
        <View style={{flex: 1}}>
          <MainView>
            <IndexText>2/2</IndexText>
            <AnswerText>
              V for vendetta
            </AnswerText>
            <QuestionBtn onPress={() => this.setState({ toggleView: 'question' })}>
              <Text style={{fontSize: 25, color: 'red'}}>Question</Text>
            </QuestionBtn>
          </MainView>
          <BtnView>
            <CorrectBtn>
              <Text style={{color: 'white', fontSize: 25}}>Correct</Text>
            </CorrectBtn>
            <IncorrectBtn>
              <Text style={{color: 'white', fontSize: 25}}>Incorrect</Text>
            </IncorrectBtn>
          </BtnView>
        </View>
      )
    }
  }
}

export default Quiz
