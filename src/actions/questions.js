import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import {
    ANSWER_A_POLL,
    ADD_QUESTION,
    UPDATE_QUESTIONS
} from './actionTypes'

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