import { getDecks, getDeck, saveDeckTitle, addCardToDeck } from "../utils/api";

export const SAVE_DECK_TITLE = 'SAVE_DECK_TITLE'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'
export const SET_NUMBER_OF_CARDS = 'SET_NUMBER_OF_CARDS'
export const INCREASE_CARDS = 'INCREASE_CARDS'

// Asynchronous Actions
export function getDecksAsync () {
    return dispatch => {
        getDecks().then(res => {
            Object.keys(res).map(title => {
                dispatch(saveDeckTitleAction({title: title}))
                getDeck(title).then(result => {
                    let counter = 0
                    for (let question of result.questions) {
                        counter++
                    }
                    dispatch(setNumberOfCards({title: title, numberOfCards: counter}))
                    result.questions.map(card => {
                        dispatch(addCardToDeckAction({
                            title: title,
                            question: card.question,
                            answer: card.answer
                        }))
                    })
                })
            })
        })
    }
}

export function addCardToDeckAsync (title, question, answer, previousNumber) {
    addCardToDeck(title, question, answer)
    return dispatch => {
        dispatch(addCardToDeckAction({ title: title, question: question, answer: answer }))
        dispatch(increaseCards({ title: title, previousNumber: previousNumber }))
    }
}

export function saveDeckTitleAsync (title) {
    saveDeckTitle(title)
    return dispatch => {
        dispatch(saveDeckTitleAction({ title: title }))
    }
}



// Synchronous Actions
export function addCardToDeckAction({title, question, answer}) {
    return {
        type: ADD_CARD_TO_DECK,
        title,
        question,
        answer,
    }
}

export function saveDeckTitleAction({title}) {
    return {
        type: SAVE_DECK_TITLE,
        title,
    }
}

export function setNumberOfCards ({title, numberOfCards}) {
    return {
        type: SET_NUMBER_OF_CARDS,
        title,
        numberOfCards,
    }
}

export function increaseCards ({ title, previousNumber }) {
    return {
        type: INCREASE_CARDS,
        title,
        previousNumber,
    }
}