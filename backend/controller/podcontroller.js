import Pod from '../models/podmodel.js'

//creating pods
export const createPods=async(req,res)=>{
    console.log(req.body)
    // await Pod.create(req.body)
}

export const getAllPods=(req,res) =>{
    res.status(200).json({
        message:"All Pods"
    })
}
