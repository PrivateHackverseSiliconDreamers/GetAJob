import { User } from "../Models/Users";
import { Authentification,createUser } from "../Services/UserService";
import { Skills } from "../Models/Skills";
import { Experience } from "../Models/Experience";

exports.Authentification= async(req,res,next)=>{
    const {Email}=req.body
    try{
        Authentification(Email)
        .then(Password=> {
            res.status(200).send({Password})
        })
    }catch(error){
        next(error)
    }
}

exports.createUser= async(req,res,next)=>{
    const user= new User(req.body.FirstName,req.body.LastName,req.body.Email,req.body.Password,req.body.PhoneNumber,req.body.About,req.body.Education,req.body.Language,req.body.Skils,req.body.location,req.body.City)
    const skills= req.body.skills
    const experiences = req.body.Experience
    try{
        createUser(user)
        skills.forEach(a_skill => {
            const skill=new Skills(a_skill,req.body.id,"")
            skill.save()
        });
        experiences.forEach(an_experience=> {
            const experience=new Experience(an_experience.StartDate,an_experience.EndDate,an_experience.Title)
            experience.save()
        });
        res.status(200).send({message:"user cree avec succes"})

    }catch(error){
        next(error)
    }

}