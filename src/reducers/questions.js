import { UPDATE_QUESTIONS, ANSWER_A_POLL, ADD_QUESTION } from '../actions/actionTypes'

export function questions(state = {}, action) {
    switch (action.type) {
        case UPDATE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ANSWER_A_POLL:
            return {
                ...state,
                [action.qid]:{
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.formattedQuestion.id]: action.formattedQuestion
            }
        default:
            return state
    }
}