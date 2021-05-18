//* WATCHED MOVIE MODEL FROM MODELS
const Movie = require('../../models/WatchedMovie')

//* EXPRESS ROUTER
const router = require('express').Router()

//? GET ALL WATCHED MOVIES
router.get('/:id', (req, res) =>{
    Movie.find({user_id: req.params.id})
        .then(movie => res.status(200).json({msg: movie}))
        .catch(err => res.status(400).json({error: err}))
})

//? ADD MOVIE TO WATCHED
router.post('/:id', (req, res) =>{
    const newMovie = new Movie()
    newMovie.user_id = req.params.id
    newMovie.movie = req.body.movieID
    Movie.create(newMovie)
        .then(movie => res.status(200).json({msg: `Movie added to watched successfully!`}))
        .catch(err => res.status(400).json({error: err.message}))
})



//? DELETE A WATCHED MOVIE
router.delete('/:id', (req, res) =>{
    Movie.findOneAndDelete({movie: req.params.id})
        .then(movie => res.status(200).json({msg: "Movie removed from watched!"}))
        .catch(err => res.status(400).json({erro: err}))
})



module.exports = router