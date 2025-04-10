import loginController from "./app/controllers/loginController.js";
import questionController from "./app/controllers/QuestionController.js"
import { Router } from "express";


const routes = Router();

routes.post("/login", loginController.Authenticate);
routes.post("/questions/answer", questionController.answerQuestion);
routes.post("/questions/create", questionController.createQuestion);
routes.all("/questions/all", questionController.getAllQuestions);
routes.all("/questions/text", questionController.getQuestionByText);

export default routes;
