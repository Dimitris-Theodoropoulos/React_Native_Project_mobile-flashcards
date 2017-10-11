export const SAVE_DECK_TITLE = 'SAVE_DECK_TITLE'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'

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
