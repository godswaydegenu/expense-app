import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'


const userSchema = mongoose.Schema({
    firstname:{
        type:String,
        required:[true, "First name is required"]
    },
    lastname:{
        type:String,
        required:[true, "Last name is required"]
    },
    email:{
        type:String,
        required:[true, "Email name is required"]
    },
    password:{
        type:String,
        required:[true, "Password name is required"]
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
},{
    timestamp:true
})


//Hash password
userSchema.pre('save',async function(next){
    if(!this.isModified('password')){next()}
const salt = await bcrypt.genSalt(10)
this.password = await bcrypt.hash(this.password,salt)
next()
})

export default mongoose.model('User' ,userSchema)