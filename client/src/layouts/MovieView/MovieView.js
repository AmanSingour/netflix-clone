import { Typography } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import axios from 'axios'
import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import {MovieCard} from '../../components'

//* IMPORTING STYLES...
import styles from './style.module.css'

export const MovieView = ({category, id, ...props}) =>{

    const [movies, setMovies] = React.useState([])

    const [loading, setLoading] = React.useState(true)


    const feature = 'https://api.themoviedb.org/3/'

    const disc_movie = 'discover/movie'

    const with_genre = '&with_genres='

    const api_key = 'api_key=d01559b3aab4074f1c215bccc7c1b1ff'

    React.useEffect(() => {
        const query2 = feature+disc_movie+'?'+api_key+'&'+with_genre+id
        if(loading){
            axios.get(query2)
            .then(res => {
                setMovies(res.data.results)    
            })
            .then( setLoading(false) )
            .catch(err => console.log(err))
        }
    }, [movies, id, loading])
    
    return(
        <div className={styles.MoviesGrid}>
            <div>
                <Typography variant="h4">
                   {loading? <Skeleton /> : <h4>{category}</h4>}
                </Typography>
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