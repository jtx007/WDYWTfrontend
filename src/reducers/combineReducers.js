import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    login_user: login_status
})

export default rootReducer

function login_status(state = { 
    loggedIn: localStorage.token ? true : false,
    current_user: {attributes: {}}
}, action){
    switch(action.type) {
        case 'LOGIN_USER':
            const success_login_object = {
                current_user: {attributes: {}},
                loggedIn: true
            }
            return success_login_object
        case 'LOGOUT_USER': 
            localStorage.clear()
            return {
                current_user: {attributes: {}},
                loggedIn: false
            }
        case 'GET_USER': 
            return {
                ...state,
                current_user: action.payload,
                included: action.payload.included || []
            }
        default: 
            return state
    }
    
}