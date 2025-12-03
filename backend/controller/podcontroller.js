import Pod from '../models/podmodel.js'

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
export const updatePod=async(req,res)=>{
    
    const pod=await Pod.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
    
    res.status(200).json({
        success:true,
        pod
    })
}

// Delete Product

export const deletePod=async(req,res)=>{
    
    const pod=await Pod.findByIdAndDelete(req.params.id)  
    res.status(200).json({
        success:true,
        message:"pod deleted successfully"
    })
}

// acessing single pod
export const getSinglePod=async(req,res)=>{
    let pod = await Pod.findById(req.params.id);
    if(!pod){
        return res.status(500).json({
            sucess:false,
            message:"Pod is not found"
        })
    }
    res.status(200).json({
        success:true,
        pod
    })
}
