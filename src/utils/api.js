import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
} from './_DATA'

export function getInitialData() {
    return Promise.all(
        [
            _getUsers(),
            _getQuestions()

        ]
    ).then((data) => data)
} 