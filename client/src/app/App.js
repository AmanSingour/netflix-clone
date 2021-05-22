import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router } from 'react-router-dom'
import {Header} from '../components'
import history from '../config/history'
import Routes from '../routes'

import styles from './style.module.css'

const App = (props) =>{

    const [navbg, setNavbg] = React.useState("none")

    const handleScroll = () =>{
        setNavbg(window.scrollY > 20 ? "#000000" : "none")    
    }


    window.addEventListener("scroll", handleScroll)

    return(
        <div className={styles.Container}>
            <Router history={history}>
                <Header />
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
