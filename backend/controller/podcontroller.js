import Pod from '../models/podmodel.js'
import HandleError from '../utils/handleError.js'
//creating pods
export const createPods=async(req,res)=>{
    
    const pod = await Pod.create(req.body)
    res.status(201).json({
        sucess:true,
        pod
    })

}
// Get all pods
export const getAllPods=async(req,res) =>{
    const pods = await Pod.find()
    res.status(200).json({
        success:true,
        pods
    })
}
// update pods
export const updatePod=async(req,res,next)=>{
    
    const pod=await Pod.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
    if(!pod){
        return next(new HandleError("Pod not found" , 404))
    }
    res.status(200).json({
        success:true,
        pod
    })
}

// Delete Product

export const deletePod=async(req,res,next)=>{
    
    const pod=await Pod.findByIdAndDelete(req.params.id)  
    if(!pod){
       return next(new HandleError("Pod not found" , 404)) 
    }
    res.status(200).json({
        success:true,
        message:"pod deleted successfully"
    })
}

// acessing single pod
export const getSinglePod=async(req,res,next)=>{
    let pod = await Pod.findById(req.params.id);
    if(!pod){
        return next(new HandleError("Pod not found" , 404))
    }
    res.status(200).json({
        success:true,
        pod
    })
}
