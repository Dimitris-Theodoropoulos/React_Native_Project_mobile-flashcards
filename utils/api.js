import {AsyncStorage} from 'react-native'

const DECK_QUIZ_APP = 'DECK_QUIZ_APP'

export function getDecks() {
    return AsyncStorage.getItem(DECK_QUIZ_APP)
        .then(res => {
            const data = JSON.parse(res)
            return data
        })
}

export function getDeck(title) {
    return AsyncStorage.getItem(DECK_QUIZ_APP)
        .then(res => {
            const data = JSON.parse(res)
            return data[title]
        })
}

export function saveDeckTitle(title) {
    AsyncStorage.mergeItem(DECK_QUIZ_APP, JSON.stringify({
        [title]: {
            title: title,
            questions: []
        }
    }))
}

export function addCardToDeck(title, question, answer) {
    AsyncStorage.getItem(DECK_QUIZ_APP)
        .then(res => {
            const data = JSON.parse(res)
            const newData = {
                ...data,
                [title]: {
                    ...data[title],
                    questions: [
                        ...data[title].questions,
                        {
                            question: question,
                            answer: answer
                        }
                    ]
                }
            }
            AsyncStorage.setItem(DECK_QUIZ_APP, JSON.stringify(newData))
        })
}

export function clearAsyncStorage () {
    AsyncStorage.setItem(DECK_QUIZ_APP, JSON.stringify({}))
}
