import React, {Component} from 'react'
import styled from 'styled-components/native'

const MainView = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
`

const DeckTitle = styled.Text`
  margin-top: 30%;
  font-size: 30;
`

const NumberOfCards = styled.Text`
  font-size: 20;
  color: gray;
`

const AddCard = styled.TouchableOpacity`
  width: 80%;
  height: 15%;
  background-color: white;
  border: solid black;
  align-items: center;
  justify-content: center;
  margin-top: 55%;
`

const StartQuiz = styled.TouchableOpacity`
  width: 80%;
  height: 15%;
  background-color: black;
  border: solid black;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
`

const AddCardText = styled.Text`
  font-size: 20;
  color: black;
`

const StartQuizText = styled.Text`
  font-size: 20;
  color: white;
`

class Deck extends Component {
    render() {
        const title = this.props.navigation.state.params.title
        return (
            <MainView>
                <DeckTitle>{title}</DeckTitle>
                <NumberOfCards>3 cards</NumberOfCards>
                <AddCard onPress={() => this.props.navigation.navigate('AddCard', {title: title})}>
                    <AddCardText>Add Card</AddCardText>
                </AddCard>
                <StartQuiz onPress={() => this.props.navigation.navigate('Quiz')}>
                    <StartQuizText>Start Quiz</StartQuizText>
                </StartQuiz>
            </MainView>
        )
    }
}

export default Deck
