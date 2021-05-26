import React from 'react'
import { Route, Switch } from 'react-router'
import { 
    LandingPage, 
    LoginPage, 
    PageNotFound, 
    SignupPage 
} from '../layouts'
import { _routes } from '../utils/data'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const Routes = () =>{
    return(
        <Switch >
            {/* HOME/LANDING PAGE ROUTE */}
            <Route exact path={_routes.HOME} component={LandingPage} />
            
            
            {/* ALL PUBLIC ROUTES CAN ACCESS WITHOUT LOGIN */}
            <PublicRoute path={[_routes.LOGIN+'/:em',_routes.LOGIN]} restricted component={LoginPage} />
            <PublicRoute path={[_routes.SIGNUP+'/:em',_routes.SIGNUP]} strict restricted component={SignupPage} />

            
            {/* ALL PRIVATE ROUTES CAN ONLY ACCESS AFTER LOGIN */}
            <PrivateRoute path={_routes.DASHBOARD} component={PageNotFound} />
            <PrivateRoute path={_routes.FAVMOVIES} component={PageNotFound} />
            <PrivateRoute path={_routes.WATCHED} component={PageNotFound} />
            <PrivateRoute path={_routes.PROFILE} component={PageNotFound} />
            
            
            <Route component={PageNotFound} />
        </Switch>
    )
}

export default Routes