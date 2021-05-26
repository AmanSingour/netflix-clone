import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router'

//* CSS STYLE...
import styles from './style.module.css'

//* LAZY COMPONENTS...
const MovieView = lazy(() => import('../MovieView/MovieView'))


//* THIS IS THE LANDING PAGE COMPONENT 
//* THIS WILL APPEAR FIRST WHEN USER OPEN APP
//* IF USER NOT LOGGED IN
export const LandingPage = ({ history, ...props }) => {

    const [email, setEmail] = React.useState('')

    const user = useSelector(state => state.user)

    const loggedIn = user ? user.loggedIn : false;

    return (
        <div className={styles.Container}>
        {!loggedIn &&
            <div className={styles.Hero}  >
                <div className={styles.MainCopy} >
                    <h1>Save your favorite movies,<br></br>TV shows and more.</h1>
                    <p>Add anytime. remove anytime.</p>
                </div>
                <div className={styles.Form} >
                    <p>Ready to save favorites? Enter your email to create or login your account.</p>
                    <div>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} value={email} />
                            <button type="submit" onClick={() => history.push(`/signup/${email}`)}>{`Get Started`}</button>
                        </form>
                    </div>
                </div>
            </div>

        }
            <div className={styles.MoviesContainer}>

                <Suspense fallback={<h2>Loading...</h2>} >
                    <MovieView showFav={loggedIn} />
                </Suspense>

            </div>

        </div>
    )

}

export default withRouter(LandingPage)