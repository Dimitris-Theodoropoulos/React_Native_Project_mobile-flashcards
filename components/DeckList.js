import React, {Component} from 'react'
import {ScrollView} from 'react-native'
import styled from 'styled-components/native'
import DeckInfo from './DeckInfo'
import {connect} from 'react-redux'
import {getDecksAsync} from "../actions/index";
import {clearAsyncStorage} from "../utils/api";

const MainView = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: center;
  background-color: white;
`

class DeckList extends Component {

    componentDidMount() {
        //clearAsyncStorage()
        this.props.dispatch(getDecksAsync())
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
