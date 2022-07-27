import { SET_AUTH_USER, LOGOUT } from '../actions/userAuth'

export default function userAuth(state = null, action) {
    switch (action.type) {
        case SET_AUTH_USER:
            return action.id
        case LOGOUT:
            return null
        default:
            return state
    }
}