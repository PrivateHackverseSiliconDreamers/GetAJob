const sqlite3 = require('sqlite3').verbose();

import{ Jobs } from "./Jobs"


export class JobApplied extends Jobs {
  constructor(JobTitle,Company,Description,Type,location,city,StartDate,Duration,user_id) {
    this.user_id = user_id;
    super(JobTitle,Company,Description,Type,location,city,StartDate,Duration);
  }

  SaveJobApplied() {
    const db = new sqlite3.Database('database.db');
    const query = `INSERT INTO jobsApplied (JobTitle,Company,Description,Type,location,city,StartDate,Duration,users_id) VALUES (?, ?, ?,?,?,?,?,?,?)`;
    db.run(query, [this.JobTitle,this.Company,this.Description,this.Type,this.location,this.city,this.StartDate,this.Duration], function(err) {
      if (err) {
        console.error(err);
      }
    });
    db.close();
  }

  

  // Autres méthodes CRUD spécifiques à la classe "Message"
}

