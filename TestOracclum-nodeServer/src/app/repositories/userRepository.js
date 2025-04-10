import database from "../../database/db.js";
class userRepository {
    getUserHashbyUsername(username) {
            const hash = database.prepare('SELECT password FROM users WHERE username = ?').get(username);
            return hash.password;
    }
}
export default new userRepository();