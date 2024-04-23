import sqlite3 from 'sqlite3';

export class ExperienceNeeded {
  my_id=0
  constructor(Title) {
    this.Title = Title;
    this.id=0;
    //id++
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

