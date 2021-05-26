import { combineReducers } from 'redux'
import { favReducer } from './favMovieReducer'
import { genreReducer } from './genreReducer'
import { noteReducer } from './noteReducer'
import { userReducer } from './userReducer'

const reducers = combineReducers({
    user: userReducer,
    movies: [],
    genres: genreReducer,
    favMovies: favReducer,
    watchedMovies: [],
    note: noteReducer,
})

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
      return reducers({
        ...state,
        favMovies: []
      }, action)
    }
  
    return reducers(state, action)
  }

export default rootReducer