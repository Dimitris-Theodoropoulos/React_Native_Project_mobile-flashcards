import React, {Component} from 'react'
import styled from 'styled-components/native'
import {connect} from 'react-redux'
import {addCardToDeckAction, increaseCards} from '../actions/index'
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

const WarnText = styled.Text`
    color: red;
`

class AddCard extends Component {
    state = {
        question: '',
        answer: '',
        emptyField: false,
        alreadyExists: false,
    }

    handleSubmit = (title, question, answer, previousNumber) => {
        this.props.dispatch(addCardToDeckAction({title: title, question: question, answer: answer}))
        this.props.dispatch(increaseCards({ title: title, previousNumber: previousNumber }))
        addCardToDeck(title, question, answer)
        this.setState({
            question: '',
            answer: ''
        })
        this.props.navigation.navigate('Deck', {title: title})
    }

    checkFields = (title, question, answer, previousNumber) => {
        if (question === '' || answer === '') {
            this.setState({emptyField: true})
        } else {
            this.setState({emptyField: false, alreadyExists: false})
            this.handleSubmit(title, question, answer, previousNumber)
        }
    }

    render() {
        const {question, answer} = this.state
        const title = this.props.navigation.state.params.title
        const previousNumber = this.props.decks[title].numberOfCards
        return (
            <MainView>
                <QuestionInput
                    placeholder='Enter the question'
                    value={question}
                    onChangeText={(text) => this.setState({question: text})}>
                </QuestionInput>
                <AnswerInput
                    placeholder='Enter the answer'
                    value={answer}
                    onChangeText={(text) => this.setState({answer: text})}>
                </AnswerInput>
                {this.state.emptyField && (
                    <WarnText>Please fill both fields...</WarnText>
                )}
                {this.state.alreadyExists && (
                    <WarnText>This question already exists, please enter a new one...</WarnText>
                )}
                <Submit onPress={() => {
                    if (this.props.decks[title].questions.length !== 0) {
                        let count = 0
                        for (q of this.props.decks[title].questions) {
                            if (q.question === question) {
                                count++
                            }
                        }
                        if (count === 0) {
                            this.checkFields(title, question, answer, previousNumber)
                        } else {
                            this.setState({alreadyExists: true})
                        }
                    } else {
                        this.checkFields(title, question, answer, previousNumber)
                    }
                }}>
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
