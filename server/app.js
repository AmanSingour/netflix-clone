/*/
    __Project : Netflix Clone Web App
    __Description : A MERN stack web app.
    __Features : Show all movies list using IMDB API, Login and Signup user,
                Authorized user can add movies to their favorite list. 
                Authorized user can add movies to watched list.
    __Author : Aman Singour
    __Started : 18 May 2021
    __Ended : __ May 2021
/*/

const express = require("express")
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const userApiRoutes = require('./routes/api/users')

const favMovieApiRoutes = require('./routes/api/fav')

const app = express()

connectDB()

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//* USER API ROUTE
app.use('/api/user', userApiRoutes)

//* fAVORITE MOVIES API ROUTE
app.use('/api/movie/fav/', favMovieApiRoutes)

//* WATCHED MOVIES API ROUTE
app.use('/api/movie/fav/', userApiRoutes)

app.get('/', (req, res) => res.send("Hello World!"))


const port = process.env.PORT ||  8000

app.listen(port, ()=> console.log(`Server is running on port: ${port}`))