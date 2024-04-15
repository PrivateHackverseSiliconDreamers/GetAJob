const sqlite3=require("sqlite3").verbose()

const db = new sqlite3.Database('../database.db')

db.serialize(()=>{
  db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    FirstName TEXT,
    LastName TEXT,
    Email TEXT,
    Password TEXT,
    PhoneNumber TEXT,
    About TEXT,
    Education TEXT,
    Language TEXT,
    Skils TEXT,
    Location TEXT,
    City TEXT
  )
`);
  db.run( `
  CREATE TABLE IF NOT EXISTS experience (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    StartDate TEXT,
    EndDate TEXT,
    Title TEXT,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id)
  )
`);
  db.run(`
  CREATE TABLE IF NOT EXISTS jobs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    JobTitle TEXT,
    Company TEXT,
    Description TEXT,
    Type TEXT,
    Location TEXT,
    City TEXT,
    Pay REAL,
    StartDate TEXT,
    Duration TEXT
  )
`);
db.run(`
  CREATE TABLE IF NOT EXISTS skills (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Title TEXT,
    user_id INTEGER,
    job_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (job_id) REFERENCES job(id)
  )
`);
db.run(`
CREATE TABLE IF NOT EXISTS experience_needed (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  Title TEXT,
  job_id INTEGER,
  FOREIGN KEY (job_id) REFERENCES jobs(id)
)
`);
  db.run(`
  CREATE TABLE IF NOT EXISTS jobsSaved (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    JobTitle TEXT,
    Company TEXT,
    Description TEXT,
    Type TEXT,
    Location TEXT,
    City TEXT,
    Pay REAL,
    StartDate TEXT,
    Duration TEXT,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id)
  )
`);
db.run(`
CREATE TABLE IF NOT EXISTS jobsApplied (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  JobTitle TEXT,
  Company TEXT,
  Description TEXT,
  Type TEXT,
  Location TEXT,
  City TEXT,
  Pay REAL,
  StartDate TEXT,
  Duration TEXT,
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES users(id)
)
`);
})