import sqlite3 from 'sqlite3';

export class Skills {

  my_id=0
  constructor(Title,user_id,job_id) {
    this.Title = Title;
    this.user_id=user_id;
    this.job_id=job_id
    this.id=0
    
  }


  save() {
    const db = new sqlite3.Database('database.db');
    const query = `INSERT INTO skills (Title,user_id,job_id) VALUES (?,?,?)`;
    db.run(query, [this.Title,this.user_id,this.job_id], function(err) {
      if (err) {
        console.error(err);
      }
    });
    db.close();
  }

  

  // Autres méthodes CRUD spécifiques à la classe "Message"
}

