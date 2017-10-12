import React, {Component} from 'react'
import styled from 'styled-components/native'
import {connect} from 'react-redux'
import {Animated, StyleSheet} from 'react-native'

const MainView = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
`

const DeckTitle = styled.Text`
  margin-top: 30%;
  font-size: 30;
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
    state = {
        quizDisabled: false,
        opacity: new Animated.Value(0)
    }

    componentDidMount() {
        const {title} = this.props.navigation.state.params
        const numberOfCards = this.props.decks[title].numberOfCards
        const {opacity} = this.state
        if (numberOfCards === 0) {
            this.setState({quizDisabled: true})
        } else {
            this.setState({quizDisabled: false})
        }
        Animated.timing(opacity, {toValue: 1, duration: 1500}).start()
    }

    handleQuiz = (title, numberOfCards) => {
        if (this.state.quizDisabled === true) {
            alert('Would you really test your knowledge with 0 questions??? Please add one first...')
        } else {
            this.props.navigation.navigate('Quiz', {title: title, numberOfCards: numberOfCards})
        }
    }

    render() {
        const {title} = this.props.navigation.state.params
        const numberOfCards = this.props.decks[title].numberOfCards
        const {opacity} = this.state
        return (
            <MainView>
                <DeckTitle>{title}</DeckTitle>
                <Animated.Text style={[styles.text, {opacity}]}>{numberOfCards} cards</Animated.Text>
                <AddCard onPress={() => this.props.navigation.navigate('AddCard', {title: title})}>
                    <AddCardText>Add Card</AddCardText>
                </AddCard>
                <StartQuiz onPress={() => this.handleQuiz(title, numberOfCards)}>
                    <StartQuizText>Start Quiz</StartQuizText>
                </StartQuiz>
            </MainView>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'gray'
    }
})

function mapStateToProps(decks) {
    return {
        decks,
    }
}

export default connect(
    mapStateToProps
)(Deck)
