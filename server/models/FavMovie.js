const mongoose = require('mongoose')

const FavMovieSchema = mongoose.Schema({
    user_id: {type: String, ref: 'users', required: true},
    movie_id: {type: String, required: true}
})

module.exports = FavMovie = mongoose.model('fav_movies', FavMovieSchema)