import bcrypt from "bcrypt";
import userRepository from "../repositories/userRepository.js"

class loginController {
    async Authenticate(req, res) {
        const { username, password } = req.body;
        try {
            const hash = userRepository.getUserHashbyUsername(username);
            if (!hash | hash == undefined) {
                return res.status(404).json({ error: "Usuário não encontrado" });
            }
            bcrypt.compare(password, hash, function (err, result) {
                if (err) {
                    console.error(err);
                    return res.status(500).send({ error: "Internal server error" });
                }
                if (result) {
                    console.log("Password is correct");
                    return res.status(200).send({ message: "Authentication successful" });
                } else {
                    console.log("Password is incorrect");
                    return res.status(401).send({ error: "Invalid credentials" });
                }
            });
        }
        catch (e) {
            console.error(e);
            return res.status(404).send({ error: "Couldn`t find matching username" });
        }
    }

}
export default new loginController();