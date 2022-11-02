import express from 'express'
import { fetchUser, registerUser } from '../../controllers/users/usersController.js'


const userRoute = express.Router()


userRoute.post('/register',registerUser)
userRoute.get('/fetch',fetchUser)


export {userRoute}