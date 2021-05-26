import axios from "axios";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { useSelector } from "react-redux";
import { MovieCard } from "../../components";

//* IMPORTING TMDB API ROUTES...
import { BASEURL, FEATURE, KeyWithRegion } from "../../services/api/tmdb";

//* IMPORTING STYLES...
import styles from "./style.module.css";

const FavMovies = ({id}) => {

  const [movie, setMovie] = React.useState({});

  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
      const disc_movie = FEATURE.movie;
      const query =
        BASEURL +
        disc_movie.QUERY+
        id+KeyWithRegion
        
      axios
        .get(query)
        .then((res) => {
            setMovie(res.data)
            setLoading(false)
        })
        .catch((err) => console.log(err));
  }, []);

  return (
      <>
        {!loading && <MovieCard showFav={true} key={movie.id} {...movie} />}
    </>
  );
};

export default FavMovies;
