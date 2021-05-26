export const userReducer = (state={loggedIn: false}, action) =>{
    switch (action.type) {
        case '@user/login':
            var newState = {
                user: action.payload,
                loggedIn: true
            }
            return newState

        case '@user/logout':
            newState = {
                user: null,
                loggedIn: false
            }
            return newState
            
        default:
            return state
    }
}