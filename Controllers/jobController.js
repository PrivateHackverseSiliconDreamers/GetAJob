import { Job } from "../Models/Jobs";
import{
    createJob,
    EditJob,
    deleteJob,
    getAllJobs,
    SaveJob,
    ApplyJob
} from "../Services/jobService"

import { JobSaved } from "../Models/job_saved";
import { JobApplied } from "../Models/job_applied";

exports.EditJob=async (req, res, next)=> {

    const job =new Job(req.body.JobTitle,req.body.Company,req.body.Description,req.body.Type,req.body.location,req.body.city,req.body.pay,req.body.StartDate,req.body.Duration)
    try {
        EditJob(job,req.body.id)
        res.status(200).send({message:"job modifie "})    
    }catch (error){
        next(error)
    }
};

exports.PostJob=async (req, res, next)=> {

    const job =new Job(req.body.JobTitle,req.body.Company,req.body.Description,req.body.Type,req.body.location,req.body.city,req.body.pay,req.body.StartDate,req.body.Duration)
    const skills= req.body.skills
    const experiences = req.body.Experience 
    `   `
    try {
        createJob(job)
        skills.forEach(a_skill => {
            const skill=new Skills(a_skill,req.body.id,"")
            skill.save()
        });

        res.status(200).send({message:"job created"})
    }catch (error){
        next(error)
    }
};

exports.deleteJob=async (req, res, next)=> {

    const {id}=req.body
    console.log(id)
    try {
        deleteJob(id)
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
    
    const job =new JobSaved(req.body.JobTitle,req.body.Company,req.body.Description,req.body.Type,req.body.location,req.body.city,req.body.pay,req.body.StartDate,req.body.Duration)
    const id= req.body.user_id

    try{
        SaveJob(job)
        res.status(200).send({message:"job saved"})
    }catch(error){
        next(error)
    }

}

exports.ApplyJobs=async(req,res,next)=>{
    const job =new JobApplied(req.body.JobTitle,req.body.Company,req.body.Description,req.body.Type,req.body.location,req.body.city,req.body.pay,req.body.StartDate,req.body.Duration,req.body.user_id)
    const id= req.body.user_id

    try{
        ApplyJob(job)
        res.status(200).send({message:"vous avez applique pour ce job"})
    }catch(error){
        next(error)
    }
}