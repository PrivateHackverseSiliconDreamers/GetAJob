const sqlite3 = require('sqlite3').verbose();

export class Experience {

  id=0;
  constructor(StartDate,EndDate,Title) {
    this.StartDate = StartDate;
    this.id=id;
    this.EndDate = EndDate;
    this.Title = Title;
    id++
  }

  save() {
    const db = new sqlite3.Database('database.db');
    const query = `INSERT INTO experience (id,StartDate,EndDate,Title) VALUES (?, ?, ?,?)`;
    db.run(query, [this.id,this.StartDate, this.EndDate, this.Title], function(err) {
      if (err) {
        console.error(err);
      }
    });
    db.close();
  }

  
  // Autres méthodes CRUD spécifiques à la classe "Message"
}

