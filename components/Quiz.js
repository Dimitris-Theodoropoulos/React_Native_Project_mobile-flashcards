import React, {Component} from 'react'
import styled from 'styled-components/native'
import {connect} from 'react-redux'
import {Text} from 'react-native'

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

//TODO add quiz functionality
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
        this.setState({ flipCard: 'question' })
    }

    handleWrong = () => {
        let newCardCounter = this.state.cardCounter + 1
        this.setState({cardCounter: newCardCounter})
        this.setState({ flipCard: 'question' })
    }

    render() {
        console.log(this.props.decks)
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
                    <Text>Finished</Text>
                    <Text>{this.state.correctCounter}/{this.state.cardCounter}</Text>
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
