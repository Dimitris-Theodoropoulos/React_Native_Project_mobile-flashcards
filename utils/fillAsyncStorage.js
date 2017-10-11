export function test() {
    const data = {
        React: {
            title: 'React',
            questions: [
                {
                    question: 'mparmpoutsala',
                    answer: 'tsnoinwgoign'
                },
                {
                    question: 'ppapapaoem',
                    answer: 'mock'
                }
            ]
        },
        Redux: {
            title: 'Redux',
            questions: [
                {
                    question: 'reduxq',
                    answer: 'redux1'
                },
                {
                    question: 'redux2',
                    answer: 'mockredux'
                }
            ]
        },
    }
    AsyncStorage.setItem(DECK_QUIZ_APP, JSON.stringify({data}))
}

const mockDecks = [
    {
        title: 'react',
        numberOfCards: 3
    },
    {
        title: 'redux',
        numberOfCards: 4
    },
    {
        title: 'udacity',
        numberOfCards: 5
    },
    {
        title: 'okeptok',
        numberOfCards: 5
    },
    {
        title: 'udavvdvsvcity',
        numberOfCards: 5
    }
]