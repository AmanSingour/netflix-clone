//* MOVIE MODEL FROM MODELS
const Movie = require('../../models/FavMovie')

//* EXPRESS ROUTER
const router = require('express').Router()

//? GET ALL FAV MOVIES
router.get('/:id', (req, res) =>{
    Movie.find({user_id: req.params.id})
        .then(movie => res.status(200).json({msg: movie}))
        .catch(err => res.status(400).json({error: err}))
})

//? ADD FAV MOVIES
router.post('/:id', (req, res) =>{
    const newFavMovie = new Movie()
    newFavMovie.user_id = req.params.id
    newFavMovie.movie = req.body.movieID
    Movie.create(newFavMovie)
        .then(movie => res.status(200).json({msg: `Movie added to favorite successfully!`}))
        .catch(err => res.status(400).json({error: err.message}))
})



//? DELETE FAV MOVIES
router.delete('/:id', (req, res) =>{
    Movie.findOneAndDelete({movie: req.params.id})
        .then(movie => res.status(200).json({msg: "Movie removed from favorite!"}))
        .catch(err => res.status(400).json({erro: err}))
})



module.exports = router