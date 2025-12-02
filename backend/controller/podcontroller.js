import Pod from '../models/podmodel.js'

//creating pods
export const createPods=async(req,res)=>{
    
    const pod = await Pod.create(req.body)
    res.status(201).json({
        sucess:true,
        pod
    })

}

export const getAllPods=(req,res) =>{
    res.status(200).json({
        message:"All Pods"
    })
}
