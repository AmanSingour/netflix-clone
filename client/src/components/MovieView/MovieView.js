import axios from 'axios'
import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import MovieCard from '../MovieCard/MovieCard'

//* IMPORTING STYLES...
import styles from './style.module.css'

export const MovieView = ({category, id, ...props}) =>{

    const [movies, setMovies] = React.useState([])


    const feature = 'https://api.themoviedb.org/3/'

    const disc_movie = 'discover/movie'

    const with_genre = '&with_genres='

    const api_key = 'api_key=d01559b3aab4074f1c215bccc7c1b1ff'

    React.useEffect(() => {
        const query2 = feature+disc_movie+'?'+api_key+'&'+with_genre+id
        axios.get(query2)
            .then(res => {
                setMovies(res.data.results)    
            })
            .catch(err => console.log(err))
    }, [movies, id])
    
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
                    <MovieCard key={movie.id} {...movie} />
                )})}
            </ScrollContainer>
        </div>    
    )
}

export default MovieView