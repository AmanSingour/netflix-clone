import axios from "axios";
import React from "react";
import { Container, Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "../components";
import history from "../config/history";
import Routes from "../routes";
import { addGenre } from "../services/actions/movie/genre-action";
import { removeNote } from "../services/actions/note/note-action";

//* IMPORTING TMDB API ROUTES...
import { BASEURL, FEATURE, KeyWithRegion } from "../services/api/tmdb";

import { _navData, _navWithAuth } from "../utils/data";

import styles from "./style.module.css";

const App = (props) => {
  const dispatch = useDispatch();

  const notify = useSelector((state) => state.note);

  const isLoggedIn = useSelector((state) => state.user.loggedIn);

  React.useEffect(() => {
    const query = BASEURL + FEATURE.genre_list.QUERY + KeyWithRegion;
    axios
      .get(query)
      .then((res) => {
        dispatch(addGenre(res.data.genres));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className={styles.Container}>
      <Router history={history}>
        <header className={styles.Header}>
          <Header data={isLoggedIn ? _navWithAuth : _navData} />
        </header>
        <div>
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 100,
            }}
          >
            {notify.map((note, index) => (
              <Toast
                key={index}
                onClose={() => dispatch(removeNote(index))}
                show={note ? true : false}
                delay={6000}
                autohide
              >
                <Toast.Header>
                  <strong style={{ padding: "1rem" }} className="mr-auto">
                    {note}
                  </strong>
                </Toast.Header>
              </Toast>
            ))}
          </div>
          <Routes />
        </div>
        <footer>
          <p>Designed with ❤️ by Aman Singour</p>
        </footer>
      </Router>
    </div>
  );
};

export default App;
