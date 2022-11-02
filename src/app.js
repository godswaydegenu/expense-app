import express from 'express'
import { connect } from './config/database.js'
import { errorHandler, notFound } from './middleware/erorMiddleware.js'
import { userRoute } from './routes/users/usersRoute.js'

const app =express()


//database connect
connect()

//middleware
app.use(express.json())

// routes
app.use('/expenses/users/',userRoute)

//error
app.use(notFound)
app.use(errorHandler)

export {app}