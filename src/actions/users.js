import {UPDATE_USERS} from './actionTypes'

export function updateUsers(users) {
    return {
        type:UPDATE_USERS,
        users
    }
}