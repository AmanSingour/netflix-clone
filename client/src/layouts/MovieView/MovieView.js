import axios from 'axios'
import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import {MovieCard} from '../../components'

//* REACT SKELETON FOR LOADING STATE...
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

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
            <SkeletonTheme color="#0e0e0e" highlightColor="#1e1e1e">
            
                <div>
                    <h4>{category || <Skeleton width={200} />}</h4>
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

            </SkeletonTheme>
        </div>    
    )
}

export default MovieView