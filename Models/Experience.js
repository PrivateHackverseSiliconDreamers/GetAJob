const sqlite3 = require('sqlite3').verbose();

export class Experience {
  constructor(StartDate,EndDate,Title) {
    this.StartDate = StartDate;
    this.EndDate = EndDate;
    this.Title = Title;
  }

  save() {
    const db = new sqlite3.Database('database.db');
    const query = `INSERT INTO experience (StartDate,EndDate,Title) VALUES (?, ?, ?)`;
    db.run(query, [this.StartDate, this.EndDate, this.Title], function(err) {
      if (err) {
        console.error(err);
      }
    });
    db.close();
  }

  
  // Autres méthodes CRUD spécifiques à la classe "Message"
}

