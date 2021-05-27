import axios from "axios";
import React from "react";
import { Card } from "react-bootstrap";

//* IMPORTING ICONS...
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../services/actions/movie/fav-action";
import { addNote } from "../../services/actions/note/note-action";
import { BASEURL } from "../../services/api/server";

//* STYLES IMPORT...
import styles from "./style.module.css";

export const MovieCard = ({
  id,
  title,
  vote_average,
  poster_path,
  overview,
  showFav,
  ...props
}) => {
  const [_id, setId] = React.useState(id);

  const [fav, setFav] = React.useState(false);

  const user = useSelector((state) => state.user);

  const favMovies = useSelector((state) => state.favMovies);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (favMovies.includes(_id.toString())) setFav(true);
    else setFav(false);
  }, [favMovies]);

  const handleClick = (movieId) => {
    const payload = {
      user_id: user.user.id,
      movie_id: movieId,
    };
    if (!fav) {
      axios
        .post(BASEURL + "movie/fav", payload)
        .then((res) => {
          if (res.status === 201) {
            dispatch(addFav(movieId.toString()));
            dispatch(addNote(res.data.msg));
            setFav(true);
          }
        })
        .catch((e) => {
          if (e.response)
            if (e.response.status === 400)
              dispatch(addNote(e.response.data.msg));
            else dispatch(addNote(e.response.statusText));
          else console.log(e);
        });
    } else {
      console.log(payload);
      axios
        .delete(BASEURL + 'movie/fav', {
          headers: {
            // Overwrite Axios's automatically set Content-Type
            "Content-Type": "application/json",
          }, data: payload
        })
        .then((res) => {
          if (res.status === 200) {
            dispatch(removeFav(movieId.toString()));
            dispatch(addNote(res.data.msg));
            setFav(false);
          }
        })
        .catch((e) => {
          if (e.response)
            if (e.response.status === 400)
              dispatch(addNote(e.response.data.msg));
            else dispatch(addNote(e.response.statusText));
          else console.log(e);
        });
    }
  };

  return (
    <div
      id={_id}
      className={styles.CardContainer}
      style={{
        background: `url(https://image.tmdb.org/t/p/w780${poster_path})`,
      }}
    >
      {title ? (
        <Card className={styles.Card}>
          <Card.Header className={styles.CardHeader}>
            {showFav && (
              <span
                style={{ fontSize: "2.5em" }}
                onClick={() => handleClick(_id)}
              >
                {fav ? <AiTwotoneHeart color="#E53D36" /> : <AiOutlineHeart />}
              </span>
            )}
          </Card.Header>
          <Card.Body className={styles.CardBody}>
            <Card.Text className={styles.Overview}>
              <strong>{overview}</strong>
            </Card.Text>
            {/*
                    <div className={styles.CardImg}></div>
                    <Card.Title className={styles.CardTitle}><h3>{title}</h3></Card.Title>
                
                <Card.Text>
                    {overview}
                </Card.Text>
                */}
          </Card.Body>
          <Card.Footer className={styles.CardFooter}>
            <Card.Title className={styles.CardTitle}>
              <h5>{title}</h5>
            </Card.Title>
            <div className={styles.FooterRow}>
              <small className="text-muted">⭐ {vote_average}</small>
            </div>
          </Card.Footer>
        </Card>
      ) : (
        <Skeleton />
      )}
    </div>
  );
};

export default MovieCard;
