import { Job } from "../Models/Jobs";
import{
    createJob,
    EditJob,
    deleteJob,
    getAllJobs,
    SaveJob,
    ApplyJob
} from "../Services/jobService"

exports.EditJob=async (req, res, next)=> {

    const job =new Job(req.body.JobTitle,req.body.Company,req.body.Description,req.body.Type,req.body.location,req.body.city,req.body.pay,req.body.StartDate,req.body.Duration)
    try {
        EditJob(job)
        res.status(200).send({message:"read  task "})    
    }catch (error){
        next(error)
    }
};

exports.PostJob=async (req, res, next)=> {

    const job =new Job(req.body.JobTitle,req.body.Company,req.body.Description,req.body.Type,req.body.location,req.body.city,req.body.pay,req.body.StartDate,req.body.Duration)

    try {
        createJob(job)
        res.status(200).send({message:"job created"})
    }catch (error){
        next(error)
    }
};

exports.deleteJob=async (req, res, next)=> {

    const {Title}=req.body
    console.log(Title)
    try {
        deleteJob(Title)
        res.status(200).send({message:"job deleted"})
    }catch (error){
        next(error)
    }
};

exports.getAllJobs= async(req,res,next)=> {
    
    try {
        getAllJobs()
        .then(jobs=>{
            
            res.status(200).send({jobs})
            console.log(jobs)
        })
        
    }catch (error){
        next(error)
    }
};

exports.SaveJobs=async(req,res,next)=> {
    
    const job =new Job(req.body.JobTitle,req.body.Company,req.body.Description,req.body.Type,req.body.location,req.body.city,req.body.pay,req.body.StartDate,req.body.Duration)
    const id= req.body.id

    try{
        SaveJob(job,id)
        res.status(200).send({message:"job saved"})
    }catch(error){
        next(error)
    }

}

exports.ApplyJobs=async(req,res,next)=>{
    const job =new Job(req.body.JobTitle,req.body.Company,req.body.Description,req.body.Type,req.body.location,req.body.city,req.body.pay,req.body.StartDate,req.body.Duration)
    const id= req.body.id

    try{
        ApplyJob(job,id)
        res.status(200).send({message:"vous avez applique pour ce job"})
    }catch(error){
        next(error)
    }
}