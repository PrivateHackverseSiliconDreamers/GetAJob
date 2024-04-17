const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("../database.db");

import {Job} from "../Models/Jobs"
import { JobSaved } from "../Models/job_saved";
import { JobApplied } from "../Models/job_applied";

export function createJob(job){
    
    db.run(
        `INSERT INTO jobs (JobTitle,Company,Description,Type,location,city,StartDate,Duration) VALUES (?, ?, ?,?,?,?,?,?)`,
        [job.JobTitle,job.Company,job.Description,job.Type,job.location,job.city,job.StartDate,job.Duration],
        function (err) {
          if (err) {
            console.error(err.message);
          } else {
            console.log(`Job "${job.JobTitle}"  a été créée.`);
          }
        }
      );
}

export function EditJob(job,id){
    db.run(`UPDATE jobs SET JobTitle=?,Company=?,Description=?,Type,location=?,city=?,StartDate=?,Duration=? where id=?`
    ,[job.JobTitle,job.Company,job.Description,job.Type,job.location,job.city,job.StartDate,job.Duration,id],(err)=>{
        if(err){
            console.error(err.message)
        }else{
            console.log("job modifie")
        }
    })
}

export function deleteJob(Title) {
    db.run(
      `DELETE FROM jobs WHERE Jobtitle = ?`,
      [Title],
      function (err) {
        if (err) {
          console.error(err.message);
        } else {
          console.log(`Job "${Title}" supprimée.`);
        }
      }
    );
  }

export function getAllJobs() {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM jobs`, function (err, rows) {
            if (err) {
                reject(err.message);
            } else {
                const jobs = rows.map(row => (
                    new Job(row.JobTitle,row.Company,row.Description,row.Type,row.location,row.city,row.pay,row.StartDate,row.Duration)
                    /*{
                    this.JobTitle = row.JobTitle;
                    this.Company = row.Company;
                    this.Description = row.Description;
                    this.Type = row.Type;
                    this.Location=row.location
                    this.city = row.city;
                    this.pay= row.pay
                    this.StartDate= row.StartDate
                    this.Duration= row.Duration

                }*/));
                resolve(jobs);
            }
        });
    });
}

export function SaveJob(job,id){
    const jobsaved=new JobSaved(job.JobTitle,job.Company,job.Description,job.Type,job.location,job.city,job.StartDate,job.Duration,id)
    jobsaved.SaveJob();
}

export function ApplyJob(job,id){
    const jobApplied=new JobApplied(job.JobTitle,job.Company,job.Description,job.Type,job.location,job.city,job.StartDate,job.Duration,id)
    jobApplied.SaveJobApplied();
}