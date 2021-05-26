import React from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router'
import { 
    FavMoviesPage,
    LandingPage, 
    LoginPage, 
    PageNotFound, 
    SignupPage 
} from '../layouts'
import { addNote } from '../services/actions/note/note-action'
import { doLogout } from '../services/actions/user/user-action'
import { _routes } from '../utils/data'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const Routes = () =>{
    return(
        <Switch >
            {/* HOME/LANDING PAGE ROUTE */}
            <PublicRoute exact path={_routes.HOME} component={LandingPage} />
            
            {/* ALL PUBLIC ROUTES CAN ACCESS WITHOUT LOGIN */}
            <PublicRoute path={[_routes.LOGIN+'/:em',_routes.LOGIN]} restricted component={LoginPage} />
            <PublicRoute path={[_routes.SIGNUP+'/:em',_routes.SIGNUP]} strict restricted component={SignupPage} />

            
            {/*//? ALL PRIVATE ROUTES CAN ONLY ACCESS AFTER LOGIN 
            <PrivateRoute path={_routes.WATCHED} component={PageNotFound} />
            <PrivateRoute path={_routes.PROFILE} component={PageNotFound} />
            */}

            <PrivateRoute path={_routes.FAVMOVIES} component={FavMoviesPage} />
            <PrivateRoute path={_routes.LOGOUT} component={Logout} />
            
            
            <Route component={PageNotFound} />
        </Switch>
    )
}

const Logout = () =>{

    const dispatch = useDispatch()

    React.useEffect(()=>{
        dispatch(doLogout())
        dispatch({type: 'RESET_STORE'})
        dispatch(addNote("Successfully Logged out!"))
    }, [])
    return (
        <div>Logout</div>
    )
}

export default Routes