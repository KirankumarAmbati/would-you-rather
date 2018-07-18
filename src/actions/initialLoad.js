import {showLoading, hideLoading} from 'react-redux-loading'
import {getInitialData} from '../utils/api'
import {updateUsers} from '../actions/users'
import {updateQuestions} from '../actions/questions'

export function handleInitialLoad() {
    return (dispatch) => {
        dispatch(showLoading())
        
        return getInitialData()
            .then(([users, questions]) => {
                dispatch(updateUsers(users))
                dispatch(updateQuestions(questions))
                dispatch(hideLoading())
        })
    }
}