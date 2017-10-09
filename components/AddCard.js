import React, { Component } from 'react'
import styled from 'styled-components/native'

const MainView = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
`

const QuestionInput = styled.TextInput`
  width: 90%;
  height: 8%;
  margin-top: 30%;
  border: solid black;
`

const AnswerInput = styled.TextInput`
  width: 90%;
  height: 8%;
  margin-top: 25%;
  border: solid black;
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

class AddQuestion extends Component {
  state = {
    questionValue: 'Enter the question',
    answerValue: 'Enter the answer'
  }

  handleQuestionText = (e) => {
    e.preventDefault()
    this.setState({ questionValue: e.target.value })
  }

  handleAnswerText = (e) => {
    e.preventDefault()
    this.setState({ answerValue: e.target.value })
  }

  render () {
    return (
      <MainView>
        <QuestionInput
          value={this.state.questionValue}
          onChange={this.handleQuestionText}>
        </QuestionInput>
        <AnswerInput
          value={this.state.answerValue}
          onChange={this.handleAnswerText}>
        </AnswerInput>
        <Submit>
          <SubmitText>Submit</SubmitText>
        </Submit>
      </MainView>
    )
  }
}

export default AddQuestion
