import questionRepository from "../repositories/questionRepository.js";

class questionController {
    async answerQuestion(req, res){
        const{ answer, key } = req.body;
        try{
            questionRepository.answerQuestion(answer, key);
            return res.status(200).send({message: "resposta respondida!"});
        }
        catch(e){
            return console.log("error:", e)
        }
    }
    async createQuestion(req, res){
        const { username, question } = req.body;
        console.log(username,question)
        try{
            questionRepository.createQuestion(username, question);
            return res.status(200).send({message: "pergunta criada!"});
        }
        catch(e){
            console.log("error:", e);
            return res.status(500).send({message: "Erro ao criar pergunta"});
          }
    }
    async getQuestionByText(req, res){
        const { text } = req.query;
        try{
            const questions = questionRepository.getQuestionByText(text);
            return res.status(200).send(questions);
        }
        catch(e){
            return console.log("error:", e)
        }
    }
    async getAllQuestions(req, res){
        const {username} = req.query;
        try{
            const questions = questionRepository.getAllQuestions(username);
            return res.status(200).send(questions);
        }
        catch(e){
            return console.log("error:", e)
        }
    }

}
export default new questionController();