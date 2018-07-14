import { saveQuestionAnswer, saveQuestion } from '../utils/api'

export const UPDATE_QUESTIONS = 'UPDATE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_A_POLL = 'ANSWER_A_POLL'

export function updateQuestions(questions) {
    return {
        type: UPDATE_QUESTIONS,
        questions
    }
}

function answerPoll({authedUser, qid, answer}) {
    return {
        type: ANSWER_A_POLL,
        authedUser,
        qid,
        answer
    }
}

function addQuestion(formattedQuestion) {
    return {
        type: ADD_QUESTION,
        formattedQuestion
    }
}

export function handleAnswerPoll(answerObject) {
    return (dispatch) => {
        dispatch(answerPoll(answerObject))
        
        return saveQuestionAnswer(answerObject)
            .catch((e) => {
                console.log('Save Poll Failed !!')
                dispatch(answerPoll(answerObject))
        })
    }
}

export function handleAddQuestion(question) {
    return (dispatch) => {
        return saveQuestion(question)
            .then((formattedQuestion) => {
                dispatch(addQuestion(formattedQuestion))
            })
            .catch((e) => {
                console.log('AddQuestion action failed..')
        })
    }
}