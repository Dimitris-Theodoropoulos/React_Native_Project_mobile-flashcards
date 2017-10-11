import {ADD_CARD_TO_DECK, SAVE_DECK_TITLE, SET_NUMBER_OF_CARDS, INCREASE_CARDS} from '../actions'

function decks(state = {}, action) {
    const {title, question, answer, numberOfCards, previousNumber} = action
    switch (action.type) {
        case SAVE_DECK_TITLE :
            return {
                ...state,
                [title]: {
                    title: title,
                    questions: [],
                    numberOfCards: 0
                }
            }
        case ADD_CARD_TO_DECK :
            return {
                ...state,
                [title]: {
                    ...state[title],
                    questions: [
                        ...state[title].questions,
                        {
                            question: question,
                            answer: answer
                        }
                    ]
                }
            }
        case SET_NUMBER_OF_CARDS :
            return {
                ...state,
                [title]: {
                    ...state[title],
                    numberOfCards: numberOfCards
                }
            }
        case INCREASE_CARDS :
            let newNumber = previousNumber + 1
            return {
                ...state,
                [title]: {
                    ...state[title],
                    numberOfCards: newNumber
                }
            }
        default :
            return state
    }
}

export default decks
