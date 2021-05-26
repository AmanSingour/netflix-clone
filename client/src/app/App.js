import axios from "axios";
import React from "react";
import { Toast } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "../components";
import history from "../config/history";
import Routes from "../routes";
import { addFav, getFav } from "../services/actions/movie/fav-action";
import { addGenre } from "../services/actions/movie/genre-action";
import { addNote, removeNote } from "../services/actions/note/note-action";

//* IMPORTING TMDB API ROUTES...
import { BASEURL, FEATURE, KeyWithRegion } from "../services/api/tmdb";

//* IMPORTING SERVER BASEURL...
import {BASEURL as ServerBase} from '../services/api/server'

import { _navData, _navWithAuth } from "../utils/data";

import styles from "./style.module.css";

const App = ({ user }) => {
  const dispatch = useDispatch();

  const notify = useSelector((state) => state.note);

  const loggedIn = user ? user.loggedIn : false;

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

  React.useEffect(() => {
    if(loggedIn){
      axios.get(ServerBase+'movie/fav/'+user.user.id)
      .then((res) => {
        if (res.status === 200) {
          dispatch(getFav(res.data.movie));
        }
      })
      .catch((e) => {
        if (e.response)
          if (e.response.status === 400) dispatch(addNote(e.response.data.msg));
          else dispatch(addNote(e.response.statusText));
        else console.log(e);
      });
    }
  }, [loggedIn]);

  return (
    <div className={styles.Container}>
      <Router history={history}>
        <header className={styles.Header}>
          <Header
            data={loggedIn ? _navWithAuth : _navData}
            username={loggedIn && user.user.name}
          />
        </header>
        <div>
          <div
            style={{
              position: "absolute",
              right: 2,
              top: 100,
              zIndex: 3,
            }}
          >
            {notify.map((note, index) => (
              <Toast
                key={index}
                onClose={() => dispatch(removeNote(index))}
                show={note ? true : false}
                delay={500}
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
        <footer style={{padding: "2rem 0", display: "block", textAlign: "center" }}>
          <p>Designed with ❤️ by Aman Singour</p>
        </footer>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(App);
