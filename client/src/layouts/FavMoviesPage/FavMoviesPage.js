import React, { Suspense } from "react";
import { Col, Row } from "react-bootstrap";
import ScrollContainer from "react-indiana-drag-scroll";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
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

        {favMovies.length ? (
          <ScrollContainer
            hideScrollbars
            activationDistance={10}
            className={styles.ScrollContainer}
          >
            <Suspense fallback={<h1>Loading...</h1>}>
              {favMovies.map((id) => (
                <FavMovies className={styles.Card} key={"fav" + id} id={id} />
              ))}
            </Suspense>
          </ScrollContainer>
        ) : (
          <div className={styles.Notfound}>
            <h2 className="text-muted">No favorite movie :(</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default FavMoviesPage;
