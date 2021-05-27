import axios from "axios";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { MovieCard } from "../../components";

//* IMPORTING TMDB API ROUTES...
import { BASEURL, FEATURE, KeyWithRegion } from "../../services/api/tmdb";

//* IMPORTING STYLES...
import styles from "./style.module.css";

const FavMovies = ({id}) => {

  const [movie, setMovie] = React.useState({});

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
      const disc_movie = FEATURE.movie;
      const query = BASEURL + disc_movie.QUERY + id + KeyWithRegion;

      axios
        .get(query)
        .then((res) => {
          setMovie(res.data);
          setLoading(false)
        })
        .catch((err) => console.log(err));
  }, [])

  return (
      <>
      {loading ? 
            <SkeletonTheme color="#0e0e0e" highlightColor="#1e1e1e">
              <Skeleton width={100} />
            </SkeletonTheme>
            :
        <MovieCard className={styles.Card} showFav={true} key={movie.id} {...movie} />
      }
    </>
  );
};

export default FavMovies;
