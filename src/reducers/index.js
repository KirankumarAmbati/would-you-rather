import {combineReducers} from 'redux'
import {loadingBarReducer} from 'react-redux-loading'
import {users} from './users'
import {questions} from './questions'
import {login} from './login'

export default combineReducers({
    users,
    questions,
    login,
    loadingBar:loadingBarReducer
})