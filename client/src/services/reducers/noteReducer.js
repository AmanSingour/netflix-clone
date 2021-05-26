export const noteReducer = (state = '', action) => {
    switch (action.type) {
        case '@note/add':
            return action.payload

        case '@note/remove':
            return ''

        default:
            return state
    }
}