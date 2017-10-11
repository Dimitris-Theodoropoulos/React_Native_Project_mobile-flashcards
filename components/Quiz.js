import React, {Component} from 'react'
import styled from 'styled-components/native'

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

class Quiz extends Component {
    state = {
        flipCard: 'question'
    }

    render() {
        const {flipCard} = this.state
        if (flipCard === 'question') {
            return (
                <MainView>
                    <CardTracker>2/2</CardTracker>
                    <MainText>What is the name of your favorite movie?</MainText>
                    <ToggleBtn onPress={() => this.setState({flipCard: 'answer'})}>
                        <ToggleText>Answer</ToggleText>
                    </ToggleBtn>
                    <CorrectBtn>
                        <BtnText>Correct!</BtnText>
                    </CorrectBtn>
                    <IncorrectBtn>
                        <BtnText>Next time...</BtnText>
                    </IncorrectBtn>
                </MainView>
            )
        }
        if (flipCard === 'answer') {
            return (
                <MainView>
                    <CardTracker>2/2</CardTracker>
                    <MainText>V For Vendetta</MainText>
                    <ToggleBtn onPress={() => this.setState({flipCard: 'question'})}>
                        <ToggleText>Question</ToggleText>
                    </ToggleBtn>
                    <CorrectBtn>
                        <BtnText>Correct!</BtnText>
                    </CorrectBtn>
                    <IncorrectBtn>
                        <BtnText>Next time...</BtnText>
                    </IncorrectBtn>
                </MainView>
            )
        }
    }
}

export default Quiz
