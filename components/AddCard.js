import React, {Component} from 'react'
import styled from 'styled-components/native'
import {connect} from 'react-redux'
import {addCardToDeckAction} from '../actions'
import {addCardToDeck} from "../utils/api";

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

class AddCard extends Component {
    state = {
        question: '',
        answer: '',
    }

    handleSubmit = (title, question, answer) => {
        this.props.dispatch(addCardToDeckAction({title: title, question: question, answer: answer}))
        addCardToDeck(title, question, answer)
        this.setState({
            question: '',
            answer: ''
        })
        this.props.navigation.navigate('Home')
    }

    render() {
        const {question, answer} = this.state
        const title = this.props.navigation.state.params.title
        return (
            <MainView>
                <QuestionInput
                    placeholder='Enter the question'
                    value={this.state.question}
                    onChangeText={(text) => this.setState({question: text})}>
                </QuestionInput>
                <AnswerInput
                    placeholder='Enter the answer'
                    value={this.state.answer}
                    onChangeText={(text) => this.setState({answer: text})}>
                </AnswerInput>
                <Submit onPress={() => this.handleSubmit(title, question, answer)}>
                    <SubmitText>Submit</SubmitText>
                </Submit>
            </MainView>
        )
    }
}

function mapStateToProps(decks) {
    return {
        decks,
    }
}

export default connect(
    mapStateToProps
)(AddCard)
