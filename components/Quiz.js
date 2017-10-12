import React, {Component} from 'react'
import styled from 'styled-components/native'
import {connect} from 'react-redux'

const MainView = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
`

const CardTracker = styled.Text`
  font-size: 30;
  margin-top: 3%;
`

const MainText = styled.Text`
  font-size: 45;
  margin-top: 10%;
  height: 30%;
`

const ToggleBtn = styled.TouchableOpacity`
  margin-top: 10%;
`

const ToggleText = styled.Text`
  font-size: 25;
  color: red;
`

const CorrectBtn = styled.TouchableOpacity`
  width: 65%;
  align-items: center;
  justify-content: center;
  height: 10%;
  margin-top: 30%;
  background-color: green;
`

const BtnText = styled.Text`
  font-size: 25;
  color: white;
`

const IncorrectBtn = styled.TouchableOpacity`
  width: 65%;
  align-items: center;
  justify-content: center;
  height: 10%;
  margin-top: 2%;
  background-color: red;
`

const FinishedQuiz = styled.Text`
    margin-top: 5%;
    font-size: 50;
`

const Rate = styled.Text`
    margin-top: 10%;
    color: gray;
    font-size: 35
`

const Success = styled.Text`
    color: green;
    font-size: 30;
    margin-top: 10%
`

const Failure = styled.Text`
    color: red;
    font-size: 30;
    margin-top: 10%
`

const BackToHome = styled.TouchableOpacity`
  width: 65%;
  align-items: center;
  justify-content: center;
  height: 10%;
  margin-top: 45%;
  background-color: white;
  border: solid black;
`

const RestartQuiz = styled.TouchableOpacity`
  width: 65%;
  align-items: center;
  justify-content: center;
  height: 10%;
  margin-top: 5%;
  background-color: black;
`

const RestartText = styled.Text`
    color: white;
    font-size: 30;
`

const BackToDeck = styled.Text`
    color: black;
    font-size: 30;
    
`

class Quiz extends Component {
    state = {
        cardCounter: 0,
        flipCard: 'question',
        correctCounter: 0,
    }

    handleCorrect = () => {
        let newCardCounter = this.state.cardCounter + 1
        let newCounter = this.state.correctCounter + 1
        this.setState({correctCounter: newCounter})
        this.setState({cardCounter: newCardCounter})
        this.setState({flipCard: 'question'})
    }

    handleWrong = () => {
        let newCardCounter = this.state.cardCounter + 1
        this.setState({cardCounter: newCardCounter})
        this.setState({flipCard: 'question'})
    }

    render() {
        const {flipCard} = this.state
        const {numberOfCards, title} = this.props.navigation.state.params
        if (this.state.cardCounter < this.props.decks[title].questions.length) {
            const {question, answer} = this.props.decks[title].questions[this.state.cardCounter]
            if (flipCard === 'question') {
                return (
                    <MainView>
                        <CardTracker>{this.state.cardCounter + 1}/{numberOfCards}</CardTracker>
                        <MainText>{question}</MainText>
                        <ToggleBtn onPress={() => this.setState({flipCard: 'answer'})}>
                            <ToggleText>Answer</ToggleText>
                        </ToggleBtn>
                        <CorrectBtn onPress={() => this.handleCorrect()}>
                            <BtnText>Correct!</BtnText>
                        </CorrectBtn>
                        <IncorrectBtn onPress={() => this.handleWrong()}>
                            <BtnText>Next time...</BtnText>
                        </IncorrectBtn>
                    </MainView>
                )
            }
            if (flipCard === 'answer') {
                return (
                    <MainView>
                        <CardTracker>{this.state.cardCounter + 1}/{numberOfCards}</CardTracker>
                        <MainText>{answer}</MainText>
                        <ToggleBtn onPress={() => this.setState({flipCard: 'question'})}>
                            <ToggleText>Question</ToggleText>
                        </ToggleBtn>
                        <CorrectBtn onPress={() => this.handleCorrect()}>
                            <BtnText>Correct!</BtnText>
                        </CorrectBtn>
                        <IncorrectBtn onPress={() => this.handleWrong()}>
                            <BtnText>Next time...</BtnText>
                        </IncorrectBtn>
                    </MainView>
                )
            }
        } else {
            return (
                <MainView>
                    <FinishedQuiz>QUIZ FINISHED</FinishedQuiz>
                    <Rate>Your rate is:</Rate>
                    {this.state.correctCounter / this.state.cardCounter >= 0.5
                        ? <Success>{(this.state.correctCounter / this.state.cardCounter).toFixed(2) * 100}%</Success>
                        : <Failure>{(this.state.correctCounter / this.state.cardCounter).toFixed(2) * 100}%</Failure>
                    }
                    <BackToHome onPress={() => this.props.navigation.navigate('Deck', {title: title})}>
                        <BackToDeck>Back
                            to {title} deck
                        </BackToDeck>
                    </BackToHome>
                    <RestartQuiz onPress={() => this.props.navigation.navigate('Quiz', {
                        title: title,
                        numberOfCards: numberOfCards
                    })}>
                        <RestartText>
                            Restart Quiz!
                        </RestartText>
                    </RestartQuiz>
                </MainView>
            )
        }
    }
}

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(
    mapStateToProps
)(Quiz)
