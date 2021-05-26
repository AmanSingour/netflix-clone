export const genreReducer = (state=[], action) =>{
    switch (action.type) {
        case 'ADD_GENRE':
            return action.payload
            
        default:
            return state
    }
}