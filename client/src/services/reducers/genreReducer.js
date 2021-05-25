export const genreReducer = (state=[], action) =>{
    switch (action.type) {
        case '@movie/genre/add':
            return action.payload
            
        default:
            return state
    }
}