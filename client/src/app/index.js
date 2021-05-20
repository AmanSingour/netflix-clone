import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import history from '../config/history'
import Routes from '../routes'

const App = (props) =>{
    return(
        <div>
            <Router history={history}r>
                <header>
                    <img aria-label="logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix Clone"/>
                    <button aria-label="login">Login</button>
                </header>
                <Routes />
                <footer>
                    <p>Designed with ❤️ by Aman Singour</p>
                </footer>
            </Router>
        </div>
    )
}

export default App
