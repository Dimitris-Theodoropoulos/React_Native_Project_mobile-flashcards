export const SAVE_DECK_TITLE = 'SAVE_DECK_TITLE'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'
export const SET_NUMBER_OF_CARDS = 'SET_NUMBER_OF_CARDS'
export const INCREASE_CARDS = 'INCREASE_CARDS'
//TODO refactor actions to use thunk and asynchronous calls
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