// import sqlite3 from 'sqlite3';
import Database from 'better-sqlite3'
import bcrypt from "bcrypt";

const database = new Database('./src/database/database.db', { verbose: console.log });

// Uncomment the following lines only if you want to drop the tables
// database.exec(`
//   DROP TABLE IF EXISTS questions;
//   DROP TABLE IF EXISTS users;
// `)



database.exec(`
  CREATE TABLE IF NOT EXISTS users (
    key INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT,
    title TEXT
  ) STRICT;

  CREATE TABLE IF NOT EXISTS questions (
    key INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    question TEXT UNIQUE,
    FOREIGN KEY (username) REFERENCES users(username)
  ) STRICT;
`);


// Hash de senhas
const senha1 = bcrypt.hashSync("robert123", 10);
const senha2 = bcrypt.hashSync("steven123", 10);
const senha3 = bcrypt.hashSync("john123", 10);

// Inserção de usuários
const insertUser = database.prepare('INSERT OR REPLACE INTO users (username, password, title) VALUES (?, ?, ?)');
insertUser.run("RobertKirkman", senha1, "Writer");
insertUser.run("StevenYeun", senha2, "Actor");
insertUser.run("JohnPaesano", senha3, "Musician");

// Inserção de perguntas

try {
  const insertQuestion = database.prepare('INSERT INTO questions (username, question) VALUES (?, ?)');
  insertQuestion.run("RobertKirkman", "Quantos anos demorou para criar invincible?");
  insertQuestion.run("RobertKirkman", "Quantas vezes vc quis terminar tudo");
  insertQuestion.run("StevenYeun", "Qual o maior desafio para atuar em invincible?");
  insertQuestion.run("JohnPaesano", "Qual sua música favorita de invincible?");
}
catch (e) {
  console.log("error:", e)
}
console.log("Seed finalizado com sucesso!");

export default database;