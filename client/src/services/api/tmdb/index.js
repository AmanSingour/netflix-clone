//* ALL API ROUTES ARE DEFIEND HERE...

import _key from "./key"

//? BASE URL OF TMDB API...
export const BASEURL = 'https://api.themoviedb.org/3/'

//? LANGUAGE PARAM...
export const lang = '&language=en-US'

//? FEATURE CONTAINS QUERY ROUTES...
export const feature = {
    disc_movie: {
       QUERY: 'discover/movie',
       QUERY_STRING: {
           WITH_GENRE: '&with_genres=',
           PAGE: '&page=',
       }
    },
    genre_list: {
        QUERY: 'genre/movie/list',
    },
    movie: {
        QUERY: 'movie/',
    }
}

export const KeyWithLang = _key+lang