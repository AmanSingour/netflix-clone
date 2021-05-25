import axios from 'axios'
import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import {MovieCard} from '../../components'

//* IMPORTING TMDB API ROUTES...
import { 
    BASEURL,
    FEATURE,
    KeyWithLang,
} from '../../services/api/tmdb'

//* IMPORTING STYLES...
import styles from './style.module.css'

export const MovieView = ({category, id, ...props}) =>{

    const [movies, setMovies] = React.useState([])

    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const disc_movie = FEATURE.disc_movie
        const query = BASEURL+disc_movie.QUERY+KeyWithLang+disc_movie.QUERY_STRING.WITH_GENRE+id

            axios.get(query)
            .then(res => {
                setMovies(res.data.results)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])
    
    return(
        <div className={styles.MoviesGrid}>
            <div>
                {loading? 'Loading...' : <h4>{category}</h4>}
            </div>
            <ScrollContainer 
                className={styles.ScrollContainer}
                horizontal
                hideScrollbars
                activationDistance={10}
            >
            {movies.map(movie => {
                return(
                    <MovieCard key={movie.id} {...movie} />
                )})}
            </ScrollContainer>
        </div>    
    )
}

export default MovieView