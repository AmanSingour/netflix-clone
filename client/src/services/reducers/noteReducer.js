export const noteReducer = (state = [], action) => {
    switch (action.type) {
        case '@note/add':
            return [action.payload].concat(state)

        case '@note/remove':
            var newState = state
            state.splice(action.payload, 1)
            return newState

        default:
            return state
    }
}