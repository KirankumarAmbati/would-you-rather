import {LOGIN} from '../actions/actionTypes'

export function login(state = null, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loggedUser: action.userId
            }            
        default:
            return state
    }
}