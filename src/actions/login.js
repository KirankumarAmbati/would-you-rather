import {LOGIN} from './actionTypes'

export function login(userId) {
    return {
        type: LOGIN,
        userId
    }
}