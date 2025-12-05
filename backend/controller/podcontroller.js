import Pod from '../models/podmodel.js'
import HandleError from '../utils/handleError.js'
import handleAsyncError from '../middleware/handleAsyncError.js'
import APIFunctionality from '../utils/apiFunctionality.js'


// http://localhost:8000/api/v1/pod/69331e2cb2d6cddc0a992358?keyword=criminal

//creating pods
export const createPods=handleAsyncError(async(req,res,next)=>{
    
    const pod = await Pod.create(req.body)
    res.status(201).json({
        sucess:true,
        pod
    })

})
// Get all pods
export const getAllPods=handleAsyncError(async(req,res,next) =>{
    // console.log(req.query);
    
    const apiFunctionality = new APIFunctionality(Pod.find(),req.query).search();
    console.log(apiFunctionality);
    
    const pods = await apiFunctionality.query
    res.status(200).json({
        success:true,
        pods
    })
})
// update pods
export const updatePod=handleAsyncError(async(req,res,next)=>{
    
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
})

// Delete Product

export const deletePod=handleAsyncError(async(req,res,next)=>{
    
    const pod=await Pod.findByIdAndDelete(req.params.id)  
    if(!pod){
       return next(new HandleError("Pod not found" , 404)) 
    }
    res.status(200).json({
        success:true,
        message:"pod deleted successfully"
    })
})

// acessing single pod
export const getSinglePod=handleAsyncError(async(req,res,next)=>{
    let pod = await Pod.findById(req.params.id);
    if(!pod){
        return next(new HandleError("Pod not found" , 404))
    }
    res.status(200).json({
        success:true,
        pod
    })
})
