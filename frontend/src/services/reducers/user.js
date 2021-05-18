export const userReducer = (state={loggedIn: false}, action) =>{
    switch (action.type) {
        case '@user/login':
            var newState = {
                _id: action._id,
                username: action.username,
                email: action.email,
                loggedIn: true
            }
            return newState

        case '@user/logout':
            newState = {
                _id: null,
                username: null,
                email: null,
                loggedIn: false
            }
            return newState
            
        default:
            return state
    }
}