import {SET_LOGIN_USER} from '../action/authedUser'

export default function authedUser(state = null , action) {
    switch(action.type) {
        case SET_LOGIN_USER:
            return action.id
        default:
            return state
    }
}