const sqlite3 = require('sqlite3').verbose();

export class Skills {

  id=0
  constructor(Title,user_id,job_id) {
    this.Title = Title;
    this.user_id=user_id;
    this.job_id=job_id
    this.id=id
    id++
  }

  save() {
    const db = new sqlite3.Database('database.db');
    const query = `INSERT INTO skills (id,Title,user_id,job_id) VALUES (?)`;
    db.run(query, [this.id,this.Title,this.user_id,this.job_id], function(err) {
      if (err) {
        console.error(err);
      }
    });
    db.close();
  }

  

  // Autres méthodes CRUD spécifiques à la classe "Message"
}

