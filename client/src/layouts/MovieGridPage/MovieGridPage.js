import axios from 'axios'
import React, { useEffect } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { MovieCard } from '../../components'

//* REACT SKELETON FOR LOADING STATE...
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

//* IMPORTING TMDB API ROUTES...
import {
    BASEURL,
    FEATURE,
    KeyWithRegion,
} from '../../services/api/tmdb'


import { useSelector } from 'react-redux'

//* IMPORTING STYLES...
import styles from './style.module.css'

export const MovieGridPage = ({showFav}) =>{

    const user = useSelector(state => state.user)

    const genres = useSelector(state => state.genres)

    return(
        <>
            {genres.map(({id, name}) =>(
                <MovieGrid key={id} id={id} genre={name} showFav={showFav} />
            ))}
        </>
    )
}

const MovieGrid = ({ genre, id, showFav, ...props }) => {

    const [movies, setMovies] = React.useState([])

    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const disc_movie = FEATURE.disc_movie
        const query = BASEURL + disc_movie.QUERY + KeyWithRegion + disc_movie.QUERY_STRING.WITH_GENRE + id

        axios.get(query)
            .then(res => {
                setMovies(res.data.results)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className={styles.MoviesGrid}>
            <SkeletonTheme color="#0e0e0e" highlightColor="#1e1e1e">

                <div>
                    <h4>{genre || <Skeleton width={200} />}</h4>
                </div>
                <ScrollContainer
                    className={styles.ScrollContainer}
                    horizontal
                    hideScrollbars
                    activationDistance={10}
                >
                    {movies.map(movie => {
                        return (
                            <MovieCard showFav={showFav} key={movie.id} {...movie} />
                        )
                    })}
                </ScrollContainer>

            </SkeletonTheme>
        </div>
    )
}

export default MovieGridPage