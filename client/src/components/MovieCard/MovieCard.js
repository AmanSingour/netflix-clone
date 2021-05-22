import React from 'react'
import { Card } from 'react-bootstrap'

//* STYLES IMPORT...
import styles from './style.module.css'

export const MovieCard = ({id, title, vote_average, poster_path, overview, ...props}) =>{

    const [_id, setId] = React.useState(id)

    return(
        <div 
            id={_id}
            className={styles.CardContainer} 
            style={{background:`url(https://image.tmdb.org/t/p/w780${poster_path})`}}
        >
            <Card className={styles.Card}>
                <Card.Body className={styles.CardBody}>
                {/*
                    <div className={styles.CardImg}></div>
                    <Card.Title className={styles.CardTitle}><h3>{title}</h3></Card.Title>
                
                <Card.Text>
                    {overview}
                </Card.Text>
                */}
                </Card.Body>
                <Card.Footer className={styles.CardFooter}>
                    <Card.Title className={styles.CardTitle}><h5>{title}</h5></Card.Title>
                    <div className={styles.FooterRow}>
                        <small className="text-muted">⭐ {vote_average}</small>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default MovieCard