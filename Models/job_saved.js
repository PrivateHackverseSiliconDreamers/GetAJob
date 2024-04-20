const sqlite3 = require('sqlite3').verbose();

import { Jobs } from "./Jobs"

export class JobSaved extends Jobs {
  id=0
  constructor(JobTitle,Company,Description,Type,location,city,StartDate,Duration,user_id) {
    this.user_id = user_id;
    super(id,JobTitle,Company,Description,Type,location,city,StartDate,Duration);
    id++
  }

  SaveJob() {
    const db = new sqlite3.Database('database.db');
    const query = `INSERT INTO jobsSaved (id,JobTitle,Company,Description,Type,location,city,StartDate,Duration,users_id) VALUES (?, ?, ?,?,?,?,?,?,?)`;
    db.run(query, [this.id,this.JobTitle,this.Company,this.Description,this.Type,this.location,this.city,this.StartDate,this.Duration], function(err) {
      if (err) {
        console.error(err);
      }
    });
    db.close();
  }

  

  // Autres méthodes CRUD spécifiques à la classe "Message"
}

