const sqlite3 = require('sqlite3').verbose();

export class Skills {
  constructor(Title) {
    this.Title = Title;
  }

  save() {
    const db = new sqlite3.Database('database.db');
    const query = `INSERT INTO skills (Title) VALUES (?)`;
    db.run(query, [this.Title], function(err) {
      if (err) {
        console.error(err);
      }
    });
    db.close();
  }

  

  // Autres méthodes CRUD spécifiques à la classe "Message"
}

