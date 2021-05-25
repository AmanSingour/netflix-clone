//? FEATURE CONTAINS QUERY ROUTES...
const feature = {
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

export default feature