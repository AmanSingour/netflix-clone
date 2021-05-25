import axios from 'axios'
import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router'

//* IMPORTING TMDB API ROUTES...
import {
    BASEURL,
    FEATURE,
    KeyWithRegion,
} from '../../services/api/tmdb'

//* CSS STYLE...
import styles from './style.module.css'

//* LAZY COMPONENTS...
const MovieView = lazy(() => import('../MovieView/MovieView'))


//* THIS IS THE LANDING PAGE COMPONENT 
//* THIS WILL APPEAR FIRST WHEN USER OPEN APP
//* IF USER NOT LOGGED IN
export const LandingPage = ({ history, ...props }) => {

    const [genres, setGenres] = React.useState([])

    const [loading, setLoading] = React.useState(true)

    const [email, setEmail] = React.useState('')

    React.useEffect(() => {

        const query = BASEURL + FEATURE.genre_list.QUERY + KeyWithRegion

        if (loading) {
            axios.get(query)
                .then(res => {
                    setGenres(res.data.genres)
                })
                .then(
                    setLoading(false)
                )
                .catch(function (error) {
                    console.error(error);
                });
        }
    }, [genres, loading])

    return (
        <div className={styles.Container}>
            <div className={styles.Hero}  >
                <div className={styles.MainCopy} >
                    <h1>Unlimited movies,<br></br> TV shows and more.</h1>
                    <p>Watch anywhere. Cancel anytime.</p>
                </div>
                <div className={styles.Form} >
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} value={email} />
                            <button type="submit" onClick={() => history.push(`/signup/${email}`)}>{`Get Started`}</button>
                        </form>
                    </div>
                </div>
            </div>


            <div className={styles.MoviesContainer}>

                <Suspense fallback={<h2>Loading...</h2>} >
                    {genres.map(genre => {
                        return (
                            <MovieView key={genre.id} id={genre.id} category={genre.name} />
                        )
                    })
                    }
                </Suspense>

            </div>

        </div>
    )

}

export default withRouter(LandingPage)