import { combineReducers } from 'redux'
import { genreReducer } from './genreReducer'
import { userReducer } from './userReducer'

export const reducers = combineReducers({
    user: userReducer,
    movies: [],
    genres: genreReducer,
    favMovies: [],
    watchedMovies: [],
})