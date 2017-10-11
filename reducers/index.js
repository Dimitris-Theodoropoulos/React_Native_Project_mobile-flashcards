import {ADD_CARD_TO_DECK, SAVE_DECK_TITLE, SET_NUMBER_OF_CARDS} from '../actions'

function decks(state = {}, action) {
    const {title, question, answer, numberOfCards} = action
    switch (action.type) {
        case SAVE_DECK_TITLE :
            return {
                ...state,
                [title]: {
                    title: title,
                    questions: {}
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
        default :
            return state
    }
}

export default decks
