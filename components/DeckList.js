import React, {Component} from 'react'
import {ScrollView} from 'react-native'
import styled from 'styled-components/native'
import DeckInfo from './DeckInfo'
import {connect} from 'react-redux'
import {getDeck, getDecks, clearAsyncStorage} from '../utils/api'
import {addCardToDeckAction, saveDeckTitleAction, setNumberOfCards} from "../actions/index";

const MainView = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: center;
  background-color: white;
`

class DeckList extends Component {

    componentDidMount() {
        //clearAsyncStorage()
        getDecks().then(res => {
            Object.keys(res).map(title => {
                this.props.dispatch(saveDeckTitleAction({title: title}))
                getDeck(title).then(result => {
                    let counter = 0
                    for (let question of result.questions) {
                        counter++
                    }
                    this.props.dispatch(setNumberOfCards({title: title, numberOfCards: counter}))
                    result.questions.map(card => {
                        this.props.dispatch(addCardToDeckAction({
                            title: title,
                            question: card.question,
                            answer: card.answer
                        }))
                    })
                })
            })
        })
    }

    render() {
        return (
            <MainView>
                <ScrollView style={{flex: 1}}>
                    {this.props.decks.map(deck => <DeckInfo key={deck.title} navigation={this.props.navigation} title={deck.title} />)}
                </ScrollView>
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
)(DeckList)
