import React, { Suspense } from "react";
import { Col, Row } from "react-bootstrap";
import ScrollContainer from "react-indiana-drag-scroll";
import { useSelector } from "react-redux";

//* IMPORTING STYLES...
import styles from "./style.module.css";

const FavMovies = React.lazy(() =>
  import("../../components/FavMovies/FavMovies")
);

export const FavMoviesPage = () => {
  const favMovies = useSelector((state) => state.favMovies);

  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Heading}>
          <h4>Favorite Movies</h4>
        </div>

        <Row sm={12} className="justify-content-center">
          <Suspense fallback={<h1>Loading...</h1>}>
            {favMovies.map((id) => (
              <FavMovies className={styles.Card} key={"fav" + id} id={id} />
            ))}
          </Suspense>
        </Row>
      </div>
    </>
  );
};

export default FavMoviesPage;
