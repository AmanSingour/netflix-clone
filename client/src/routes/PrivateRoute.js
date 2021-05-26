import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'

import {_routes} from '../utils/data'

//* ALL PRIVATE ROUTES WILL RETURN FROM HERE IF USER LOGGED IN...
export const PrivateRoute = ({component: Component, ...rest}) =>{

    //? GETTING LOGIN STATE FROM REDUX STORE
    const isLoggedIn = useSelector(state => state.user.loggedIn)

    return(

        //!? IF USER LOGGEDIN THEN ONLY COMPONENT WILL RENDER
        //? ELSE, IT WILL REDIRECT USER TO SIGNIN PAGE

        <Route {...rest} render={props =>(
                isLoggedIn ? 
                    <Component {...props} />
                : <Redirect to={_routes.LOGIN} from={rest.path} />
            )}
        />
    )
}

export default PrivateRoute