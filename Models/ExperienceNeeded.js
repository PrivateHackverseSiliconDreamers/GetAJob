const sqlite3 = require('sqlite3').verbose();

export class ExperienceNeeded {
  constructor(Title) {
    this.Title = Title;
  }

  save() {
    const db = new sqlite3.Database('database.db');
    const query = `INSERT INTO experience_needed (Title) VALUES (?)`;
    db.run(query, [this.Title], function(err) {
      if (err) {
        console.error(err);
      }
    });
    db.close();
  }

  

  // Autres méthodes CRUD spécifiques à la classe "Message"
}

