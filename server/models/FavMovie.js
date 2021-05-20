const mongoose = require('mongoose')

const FavMovieSchema = mongoose.Schema({
    user_id: {type: String, ref: 'users'},
    movie_id: String,
})

module.exports = FavMovie = mongoose.model('fav_movies', FavMovieSchema)