import handleAsyncError from "../middleware/handleAsyncError.js";
import User from '../models/userModel.js'

export const registerUser = handleAsyncError(async(req,resizeBy,next)=>{
    const {name,email,password}=req.body;

    const user=await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:"This is a temp ID",
            url:"This is a temp URL"
        }

    })

    resizeBy.status(201).json({
        success:true,
        user
    })
})