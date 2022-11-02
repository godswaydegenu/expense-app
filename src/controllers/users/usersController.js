import User from "../../model/User.js"
import AsyncHandler from 'express-async-handler'



const registerUser = AsyncHandler(async(req,res)=>{
    const{firstname,lastname,email,password} = req.body
    const userExist = await User.findOne({email})
    if(userExist){
        throw new Error('User Exist')
    }
    const user = await User.create({firstname,lastname,email,password})
    res.status(200).json(user)
})



const fetchUser = AsyncHandler(async(req, res)=>{
    const users = await User.find({})
    res.status(200)
    res.json(users)
    if(!users){
        throw new Error('No User Available')
    }
})
export {registerUser, fetchUser} 