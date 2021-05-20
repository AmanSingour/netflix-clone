import React from 'react'
import { 
    Card,
    CardDeck,
    Col,
    Container, 
    Row 
} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router'

//* CSS STYLE
import styles from './style.module.css'

//* THIS IS THE LANDING PAGE COMPONENT 
//* THIS WILL APPEAR FIRST WHEN USER OPEN APP
//* IF USER NOT LOGGED IN
export const LandingPage = ({history, ...props}) =>{

    //? GETTING ALL MOVIES FROM STORE STATE...
    var allMovies = useSelector(state => state.movies)    

    //? SAMPLE MOVIES DATA...
    
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
            ]
        }
    ]

    return(
        <div className={styles.Container}>
            <div className={styles.Hero}  >
                <div className={styles.MainCopy} >
                    <h1>Unlimited movies, TV shows and more.</h1>
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
            <Row>
                {
                    allMovies.map(all =>{
                        return(
                            <Row sm={1}>
                                <div><h4>{all.category}</h4></div>
                                <CardDeck>
                                {all.movies.map(movie => {
                                    return(
                                        <Card style={{maxWidth:'18rem'}}>
                                            <Card.Img variant="top" style={{maxHeight:'10rem'}} src={movie.image}/>
                                            <Card.Body>
                                                <Card.Title>{movie.title}</Card.Title>
                                                <Card.Text>
                                                    {movie.synopsis}
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <small className="text-muted">{movie.runtime}</small>
                                            </Card.Footer>
                                        </Card>
                                )})}
                                </CardDeck>
                            </Row>
                            
                    )})
                }
            </Row>
        </div>
    )

}

export default withRouter(LandingPage)