import database from "../../database/db.js";

class questionRepository {
    createQuestion(username, question) {
        database.prepare('INSERT INTO questions(username,question) VALUES (?,?)').run(username, question);
    }
    answerQuestion(answer, key ) {
        database.prepare('UPDATE questions SET answer = ? WHERE key = ?').run(answer, key);
    }
    getQuestionByText(text) {
        return database.prepare('SELECT * FROM questions WHERE question LIKE ? COLLATE NOCASE').all(`%${text}%`)

    }
    getAllQuestions(username){
        return database.prepare('SELECT * FROM questions WHERE username = ?').all(username);
    }

}
export default new questionRepository();