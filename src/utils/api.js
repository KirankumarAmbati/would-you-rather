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
    ).then(data => data)
}

export function saveQuestion(question) {
    return _saveQuestion(question)
}

export function saveQuestionAnswer(question) {
    return _saveQuestionAnswer(question)
}