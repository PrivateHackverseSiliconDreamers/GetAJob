const express = require ("express")
const router=express.Router()

import {
    PostJob,
    getAllJobs,
    SaveJobs,
    ApplyJobs
} from "../Controllers/jobController"



//post methods
router.route("/create").post(PostJob)

//delete methods
//router.route("/delete").delete(deletetask)

// modify methods 

router.route("/save").put(SaveJobs)
router.route("/Apply").put(ApplyJobs)
//router.route("/nonCompletedTask").put(noncompletetask)
//router.route("/update/description").put(updatetaskdesc)
//router.route ("/update/password").put(updatetaskpass)


//get methods

//router.route("/get").get(gettask)
router.route("/getAll").get(getAllJobs)
//router.route("/getAllfolder").get(getallstackfolder)
//router.route("/getAllTaskCompleted").get(getallstackcompleted)


router.use ("/",(req,res,next)=>{

    res.status(404).json({error:"page not found "})
})

module.exports=router;