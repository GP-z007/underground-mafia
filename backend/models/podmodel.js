import mongoose from "mongoose";

const podSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter the POD name 😁"],
        trim:true
    },

    desciption:{
        type:String,
        required:[true,"Please enter the POD description 😁"],
    },

    price:{
        type:Number,
        required:[true,"Please enter the POD price 😁"],
        maxLength:[7,"Price can't excist 7 digits!! 😡"]
    },
    
    rating:{
        type:Number,
        default:0
    },

    image:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],

    category:{
        type:String,
        required:[true,"Please enter the pod category"]
    },

    available:{
        type:Number,
        required:[true,"Please the availabitity"],
        maxLength:[5,"availabilty!! less than 5"],
        default:1
    },

    numofReviews:{
        type:Number,
        default:0
    },

    reviews:[
        {
            name:{
                type:String,
                required:true
            },

            rating:{
                type:Number,
                required:true
            },

            comment:{
                type:String,
                required:true
            }
        }
    ],

    createdAt:{
        type:Date,
        default:Date.now
    }

})


export default mongoose.model("Pod",podSchema)
