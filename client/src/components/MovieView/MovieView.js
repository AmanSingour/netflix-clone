import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import MovieCard from '../MovieCard/MovieCard'

//* IMPORTING STYLES...
import styles from './style.module.css'

export const MovieView = ({category, movies, ...props}) =>{
    
    return(
        <div className={styles.MoviesGrid}>
            <div><h4>{category}</h4></div>
            <ScrollContainer 
                className={styles.ScrollContainer}
                horizontal
                hideScrollbars
                activationDistance={10}
            >
            {movies.map(movie => {
                return(
                    <MovieCard movie={movie} />
                )})}
            </ScrollContainer>
        </div>    
    )
}

export default MovieView