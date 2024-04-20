const sqlite3=require("sqlite3").verbose()
const db=new sqlite3.Database("../database.db")

import {User} from "../Models/Users"

export function Authentification(Email){
    return new Promise((resolve,reject)=>{
        db.get("select Password from users Where Email=?",[Email],(err,row)=>{
            if(err){
                reject(err)
            }else{
                const password =row.Password
                resolve(password)
            }
        })
    })
}

export function createUser(user){
    user.save()
}