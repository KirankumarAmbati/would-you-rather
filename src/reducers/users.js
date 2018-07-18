import {UPDATE_USERS} from '../actions/actionTypes'

export function users(state = {}, action) {
    switch (action.type) {
        case UPDATE_USERS:
            return {
                ...state,
                ...action.users
            }
        default:
            return state
    }
}