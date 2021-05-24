import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router } from 'react-router-dom'
import {Header} from '../components'
import history from '../config/history'
import Routes from '../routes'
import { _navData } from '../utils/data'

import styles from './style.module.css'

const App = (props) =>{

    return(
        <div className={styles.Container}>
            <Router history={history}>
                <header className={styles.Header}>
                    <Header  data={_navData} />
                </header>
                <div>
                    <Routes />
                </div>  
                <footer>
                    <p>Designed with ❤️ by Aman Singour</p>
                </footer>
            </Router>
        </div>
    )
}

export default App
