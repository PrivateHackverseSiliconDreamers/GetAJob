const sqlite3 = require('sqlite3').verbose();

 export class User {

  id=0
  constructor(FirstName,LastName,Email,Password,PhoneNumber,About,Education,Language,Skils,location,City) {
    this.FirstName=FirstName
    this.id=id
    this.LastName=LastName
    this.Email=Email
    this.Password=Password
    this.PhoneNumber=PhoneNumber
    this.About=About
    this.Education=Education
    this.Language=Language
    this.Skils=Skils
    this.location=location
    this.City=City
    id++
  }

  save() {
    const db = new sqlite3.Database('database.db');
    const query = `INSERT INTO users (id,FirstName,LastName,Email,Password,PhoneNumber,About,Education,Language,Skils,location,City) VALUES (?, ?, ?,?,?,?,?,?,?,?,?)`;
    db.run(query, [this.id,this.FirstName,this.LastName,this.Email,this.Password,this.PhoneNumber,this.About,this.Education,this.Language,this.Skils,this.location,this.City], function(err) {
      if (err) {
        console.error(err);
      }
    });
    db.close();
  }

  
  // Autres méthodes CRUD spécifiques à la classe "Message"
}

