import React, { lazy, Suspense } from "react";
import { withRouter } from "react-router";

//* CSS STYLE...
import styles from "./style.module.css";

//* LAZY COMPONENTS...
const MovieGridPage = lazy(() => import("../MovieGridPage/MovieGridPage"));

//* THIS IS THE DASHBOARD PAGE COMPONENT
//* THIS WILL APPEAR FIRST WHEN USER OPEN APP
//* IF USER LOGGED IN
export const Dashboard = ({ history, ...props }) => {

  return (
    <div className={styles.Container}>
      <div className={styles.MoviesContainer}>
        <Suspense fallback={<h2>Loading...</h2>}>
          <MovieGridPage showFav={true} />
        </Suspense>
      </div>
    </div>
  );
};

export default withRouter(Dashboard);
