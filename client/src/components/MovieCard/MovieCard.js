import React from 'react'
import { Card } from 'react-bootstrap'

//* STYLES IMPORT...
import styles from './style.module.css'

export const MovieCard = ({movie, ...props}) =>{

    return(
        <div 
            className={styles.CardContainer} 
            style={{background:`url(${movie.image})`}}
        >
            <Card className={styles.Card}>
                <Card.Body className={styles.CardBody}>
                <div className={styles.CardImg}></div>
                <Card.Title><h3>{movie.title}</h3></Card.Title>
                <Card.Text>
                    {movie.synopsis}
                </Card.Text>
                </Card.Body>
                <Card.Footer className={styles.CardFooter}>
                    <small className="text-muted">{movie.runtime}</small>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default MovieCard