const mongoose = require('mongoose')

const WatchedMovieSchema = mongoose.Schema({
    user_id: {type: String, ref: 'users'},
    movie_id: {type: String},
})

module.exports = WatchedMovie = mongoose.model('watched_movies', WatchedMovieSchema)