import {users} from './users'
import {questions} from './questions'
import {login} from './login'
import {loadingBarReducer} from 'react-redux-loading'
import {combineReducers} from 'redux'

export default combineReducers({
    users,
    questions,
    login,
    loadingBar:loadingBarReducer
})