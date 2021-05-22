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


    allMovies = [
        {
            category: 'Action',
            movies:[
                {
                    "download":"0",
                    "image":"http://art-1.nflximg.net/eb3c7/3351b95b1ce100badd6dbf5625b2b8d12f0eb3c7.jpg",
                    "imdbid":"tt3640424",
                    "largeimage":"",
                    "netflixid":"80112565",
                    "rating":"0",
                    "released":"2016",
                    "runtime":"2h4m",
                    "synopsis":"Allied agent Max Vatan falls for a French spy during World War II. When Vatan learns she might be a double agent, he strives to prove her innocence.",
                    "title":"Allied",
                    "type":"movie",
                    "unogsdate":"2017-08-11",
                },
                {
                    "download":"0",
                    "image":"http://art-1.nflximg.net/f9145/e87a5a4862ddf9e98fcca66780b02d4de44f9145.jpg",
                    "imdbid":"tt3502172",
                    "largeimage":"",
                    "netflixid":"70307407",
                    "rating":"0",
                    "released":"2014",
                    "runtime":"1h24m",
                    "synopsis":"While a documentary team searches remote parts of the Indonesian jungle looking for an endangered leopard, they soon realize they&#39;re being stalked.",
                    "title":"The Jungle",
                    "type":"movie",
                    "unogsdate":"2017-08-11",
                },
                {
                    "download":"0",
                    "image":"http://art-1.nflximg.net/eb3c7/3351b95b1ce100badd6dbf5625b2b8d12f0eb3c7.jpg",
                    "imdbid":"tt3640424",
                    "largeimage":"",
                    "netflixid":"80112565",
                    "rating":"0",
                    "released":"2016",
                    "runtime":"2h4m",
                    "synopsis":"Allied agent Max Vatan falls for a French spy during World War II. When Vatan learns she might be a double agent, he strives to prove her innocence.",
                    "title":"Allied",
                    "type":"movie",
                    "unogsdate":"2017-08-11",
                },
                {
                    "download":"0",
                    "image":"http://art-1.nflximg.net/f9145/e87a5a4862ddf9e98fcca66780b02d4de44f9145.jpg",
                    "imdbid":"tt3502172",
                    "largeimage":"",
                    "netflixid":"70307407",
                    "rating":"0",
                    "released":"2014",
                    "runtime":"1h24m",
                    "synopsis":"While a documentary team searches remote parts of the Indonesian jungle looking for an endangered leopard, they soon realize they&#39;re being stalked.",
                    "title":"The Jungle",
                    "type":"movie",
                    "unogsdate":"2017-08-11",
                },
                {
                    "download":"0",
                    "image":"http://art-1.nflximg.net/eb3c7/3351b95b1ce100badd6dbf5625b2b8d12f0eb3c7.jpg",
                    "imdbid":"tt3640424",
                    "largeimage":"",
                    "netflixid":"80112565",
                    "rating":"0",
                    "released":"2016",
                    "runtime":"2h4m",
                    "synopsis":"Allied agent Max Vatan falls for a French spy during World War II. When Vatan learns she might be a double agent, he strives to prove her innocence.",
                    "title":"Allied",
                    "type":"movie",
                    "unogsdate":"2017-08-11",
                },
            ]
        },
        {
            category: 'Sc-Fi',
            movies:[
                {
                    "download":"0",
                    "image":"http://art-1.nflximg.net/eb3c7/3351b95b1ce100badd6dbf5625b2b8d12f0eb3c7.jpg",
                    "imdbid":"tt3640424",
                    "largeimage":"",
                    "netflixid":"80112565",
                    "rating":"0",
                    "released":"2016",
                    "runtime":"2h4m",
                    "synopsis":"Allied agent Max Vatan falls for a French spy during World War II. When Vatan learns she might be a double agent, he strives to prove her innocence.",
                    "title":"Allied",
                    "type":"movie",
                    "unogsdate":"2017-08-11",
                },
                {
                    "download":"0",
                    "image":"http://art-1.nflximg.net/f9145/e87a5a4862ddf9e98fcca66780b02d4de44f9145.jpg",
                    "imdbid":"tt3502172",
                    "largeimage":"",
                    "netflixid":"70307407",
                    "rating":"0",
                    "released":"2014",
                    "runtime":"1h24m",
                    "synopsis":"While a documentary team searches remote parts of the Indonesian jungle looking for an endangered leopard, they soon realize they&#39;re being stalked.",
                    "title":"The Jungle",
                    "type":"movie",
                    "unogsdate":"2017-08-11",
                },
                {
                    "download":"0",
                    "image":"http://art-1.nflximg.net/eb3c7/3351b95b1ce100badd6dbf5625b2b8d12f0eb3c7.jpg",
                    "imdbid":"tt3640424",
                    "largeimage":"",
                    "netflixid":"80112565",
                    "rating":"0",
                    "released":"2016",
                    "runtime":"2h4m",
                    "synopsis":"Allied agent Max Vatan falls for a French spy during World War II. When Vatan learns she might be a double agent, he strives to prove her innocence.",
                    "title":"Allied",
                    "type":"movie",
                    "unogsdate":"2017-08-11",
                },
                {
                    "download":"0",
                    "image":"http://art-1.nflximg.net/f9145/e87a5a4862ddf9e98fcca66780b02d4de44f9145.jpg",
                    "imdbid":"tt3502172",
                    "largeimage":"",
                    "netflixid":"70307407",
                    "rating":"0",
                    "released":"2014",
                    "runtime":"1h24m",
                    "synopsis":"While a documentary team searches remote parts of the Indonesian jungle looking for an endangered leopard, they soon realize they&#39;re being stalked.",
                    "title":"The Jungle",
                    "type":"movie",
                    "unogsdate":"2017-08-11",
                },
                {
                    "download":"0",
                    "image":"http://art-1.nflximg.net/eb3c7/3351b95b1ce100badd6dbf5625b2b8d12f0eb3c7.jpg",
                    "imdbid":"tt3640424",
                    "largeimage":"",
                    "netflixid":"80112565",
                    "rating":"0",
                    "released":"2016",
                    "runtime":"2h4m",
                    "synopsis":"Allied agent Max Vatan falls for a French spy during World War II. When Vatan learns she might be a double agent, he strives to prove her innocence.",
                    "title":"Allied",
                    "type":"movie",
                    "unogsdate":"2017-08-11",
                },
            ]
        }
    ]

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
                {allMovies.map(all =>{
                        return(
                            <MovieView movies={all.movies} category={all.category} />   
                    )})
                }
                </Suspense>

            </div>
            
        </div>
    )

}

export default withRouter(LandingPage)