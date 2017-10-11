import {ADD_CARD_TO_DECK, SAVE_DECK_TITLE,} from '../actions'

function decks(state = {}, action) {
    const {title, question, answer} = action
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
        default :
            return state
    }
}

export default decks
