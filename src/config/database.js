import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const connect =async()=>{
    try {
        await mongoose.connect(process.env.connect)
        console.log('Database Connected')
    } catch (error) {
        console.log("Database Not Connected Opps ")
    }
} 

export {connect}