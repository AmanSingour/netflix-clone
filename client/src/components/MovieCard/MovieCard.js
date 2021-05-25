import React from 'react'
import { Card } from 'react-bootstrap'

//* IMPORTING ICONS...
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai'

//* STYLES IMPORT...
import styles from './style.module.css'

export const MovieCard = ({id, title, vote_average, poster_path, overview, ...props}) =>{

    const [_id, setId] = React.useState(id)

    const [fav, setFav] = React.useState(false)

    return(
        <div 
            id={_id}
            className={styles.CardContainer} 
            style={{background:`url(https://image.tmdb.org/t/p/w780${poster_path})`}}
        >   
            <Card className={styles.Card}>
                <Card.Header className={styles.CardHeader}>
                    <span style={{fontSize:"2em"}} onClick={()=>setFav(!fav)}>{fav? <AiTwotoneHeart /> :<AiOutlineHeart />}</span>
                </Card.Header>
                <Card.Body className={styles.CardBody}>

                    <Card.Text className={styles.Overview}><strong>{overview}</strong></Card.Text>
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