//* MOVIE MODEL FROM MODELS
const { json } = require("body-parser");
const Movie = require("../../models/FavMovie");

//* EXPRESS ROUTER
const router = require("express").Router();

//? GET ALL FAV MOVIES
router.get("/:id", (req, res) => {
  Movie.find({ user_id: req.params.id })
    .then((movie) => {
      var data = movie.map((o) => o.movie_id);
      res.status(200).json({ movie: data });
    })
    .catch((err) => res.status(400).json({ error: err }));
});

//? ADD FAV MOVIES
router.post("/", (req, res) => {
  const newFavMovie = new Movie();
  newFavMovie.user_id = req.body.user_id;
  newFavMovie.movie_id = req.body.movie_id;
  Movie.findOne({
    movie_id: req.body.movie_id,
    user_id: req.body.user_id,
  })
    .then((movie) => {
      if (movie) res.status(400).json({ msg: `Movie already in favorite!` });
      else
        Movie.create(newFavMovie)
          .then((movie) =>
            res
              .status(201)
              .json({ msg: `Movie added to favorite successfully!` })
          )
          .catch((err) => res.status(400).json({ error: err.message }));
    })
    .catch((err) => res.status(500).json(err));
});

//? DELETE FAV MOVIES
router.delete("/", (req, res) => {
  const uid = req.body.user_id;
  const mid = req.body.movie_id;
  Movie.findOneAndDelete({
    user_id: uid,
    movie_id: mid,
  })
    .then((movie) => {
      if (movie) res.status(200).json({ msg: "Movie removed from favorite!" });
      else res.status(400).json({ msg: "Movie not found in favorite!" });
    })
    .catch((err) => res.status(400).json({ erro: err }));
});

module.exports = router;
