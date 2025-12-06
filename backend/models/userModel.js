import mongoose from "mongoose";
import validator from 'validator'

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Pleasse enter a name!"],
        maxLength:[25,"Your name should be less than 25 char"],
        minLength:[3,"Name should contain more than 3 character"]
    },
    email:{
        type:String,
        required:[true,"Please enter a email"],
        unique:true,
        validate:[validator.isEmail,"Please enter an valid email!"]
    },
    password:{
        type:String,
        required:[true,"Please enter a password"],
        minLength:[9,"Password should contain more than 9 character"],
        select:false,
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    role:{
        type:String,
        default:"user"
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date
},{timestamps:true})

//hash password


export default mongoose.model("User",userSchema)