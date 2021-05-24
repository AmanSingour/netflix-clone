import React from 'react'

//* IMPORTING STYLES...
import styles from './style.module.css'

export const PageNotFound = () =>{
    return(
        <div className={styles.Container}>
            <div className={styles.Notfound}>
                <div className={styles.MainCopy}>
                    <h1>404</h1>
                    <h2>Page not found</h2>
                </div>
                <a href="/">Homepage</a>
            </div>
        </div>
    )   
}

export default PageNotFound