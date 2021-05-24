import axios from 'axios'
import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router'

//* CSS STYLE...
import styles from './style.module.css'

//* LAZY COMPONENTS...
const MovieView  = lazy(() => import('../../components/MovieView/MovieView'))


//* THIS IS THE LANDING PAGE COMPONENT 
//* THIS WILL APPEAR FIRST WHEN USER OPEN APP
//* IF USER NOT LOGGED IN
export const LandingPage = ({history, ...props}) =>{

    const [genres, setGenres] = React.useState([])

    const [loading, setLoading] = React.useState(true)

    //? GETTING ALL MOVIES FROM STORE STATE...
    var allMovies = useSelector(state => state.movies)    

    //? SAMPLE MOVIES DATA...
    /*
    React.useEffect(() => {
        var allUsers = JSON.parse(localStorage.getItem('allUsers'))
        var index = allUsers.findIndex(user=> user!=null && user.email===email)
        if(index<0) alert('user not found!')
        else{

            if(allUsers[index].password !== password){
                alert('Wrong password')
            }else{
                //Redirect to dashboard
            }
        }
        console.log(index)
        
    })
    */

    React.useEffect(() => {

        const feature = 'https://api.themoviedb.org/3/'

        const api_key = 'api_key=d01559b3aab4074f1c215bccc7c1b1ff'

        const lang = 'language=en-US'

        const genre_list = 'genre/movie/list'

        const query1 = feature+genre_list+'?'+api_key+'&'+lang
        
        if(loading){
          axios.get(query1)
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

    return(
        <div className={styles.Container}>
            <div className={styles.Hero}  >
                <div className={styles.MainCopy} >
                    <h1>Unlimited movies,<br></br> TV shows and more.</h1>
                    <p>Watch anywhere. Cancel anytime.</p>
                </div>
                <div className={styles.Form} >
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div>
                        <input type="email" placeholder="Email address" />
                        <button type="submit" >{`Get Started`}</button>
                    </div>
                </div>
            </div>


            <div className={styles.MoviesContainer}>
                
                <Suspense fallback={<h2>Loading...</h2>} >
                {genres.map(genre =>{
                        return(
                            <MovieView key={genre.id} id={genre.id} category={genre.name} />   
                    )})
                }
                </Suspense>

            </div>
            
        </div>
    )

}

export default withRouter(LandingPage)