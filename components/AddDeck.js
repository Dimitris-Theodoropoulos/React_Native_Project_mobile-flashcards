import React, {Component} from 'react'
import styled from 'styled-components/native'
import {connect} from 'react-redux'
import {saveDeckTitleAction} from '../actions/index'
import {saveDeckTitle} from "../utils/api";

const MainView = styled.View`
  flex: 1;
  align-items: center;
  background-color: white
`

const DeckTitleInput = styled.TextInput`
  border: solid black;
  width: 90%;
  height: 8%;
  margin-top: 20%;
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

const DeckText = styled.Text`
  flex: 1;
  font-size: 45;
`

const DeckTextWrapper = styled.View`
  width: 90%;
  height: 30%;
  padding-top: 15%;
`

const WarnText = styled.Text`
    color: red;
`

class AddDeck extends Component {
    state = {
        title: '',
        warning: false,
        alreadyExists: false,
    }

    handleSubmit = (title) => {
        this.props.dispatch(saveDeckTitleAction({title: title}))
        saveDeckTitle(title)
        this.setState({title: ''})
        this.props.navigation.navigate('DeckList')
    }

    checkField = (title) => {
        if (title === '') {
            this.setState({ warning: true })
        }else {
            this.setState({
                warning: false,
                alreadyExists: false,
            })
            this.handleSubmit(title)
        }
    }

    render() {
        const {title} = this.state
        return (
            <MainView>
                <DeckTextWrapper>
                    <DeckText>
                        What is the title of your new deck?
                    </DeckText>
                </DeckTextWrapper>
                <DeckTitleInput
                    placeholder='Enter deck title'
                    value={this.state.title}
                    onChangeText={(text) => this.setState({title: text})}
                />
                {this.state.warning && (
                    <WarnText>Please enter a title...</WarnText>
                )}
                {this.state.alreadyExists && (
                    <WarnText>A deck with this title already exists! Please enter a unique title...</WarnText>
                )}
                <Submit onPress={() => {
                    if (this.props.decks.length !== 0) {
                        let count = 0
                        for (deck of this.props.decks) {
                            if (deck.title === title) {
                                count++
                            }
                        }
                        if (count === 0) {
                            this.checkField(title)
                        }else {
                            this.setState({ alreadyExists: true })
                        }
                    }else {
                        this.checkField(title)
                    }
                }}>
                    <SubmitText>
                        Submit
                    </SubmitText>
                </Submit>
            </MainView>
        )
    }
}

function mapStateToProps(decks) {
    return {
        decks: Object.keys(decks).map(key => decks[key])
    }
}

export default connect(
    mapStateToProps
)(AddDeck)
