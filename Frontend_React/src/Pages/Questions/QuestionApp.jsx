import { useState, useEffect, useRef, useCallback } from "react";
import api from "../../services/api";
import {GetCookie, DeleteCookie} from "../../services/CookieService";
import './QuestionApp.css';
import { useNavigate } from "react-router-dom";


function QuestionApp() {
    const navigate = useNavigate();

    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const searchText = useRef();

    const fetchQuestions = useCallback(async () => {
        try {
            const username = GetCookie("username"); // --------------------- FUNCAO TEMPORARIA COOKIE LOGIN ----------------------------
            const response = await api.get('/questions/all', {
                params: { username: username }  // --------------------- FUNCAO TEMPORARIA COOKIE LOGIN ----------------------------
            });
            setQuestions(response.data);
        } catch (error) {
            console.error("Error fetching questions:", error);
        }
    }, []);

    const fetchQuestionsByText = async () => {
        const searchValue = searchText.current.value;
        console.log("Valor de busca:", searchValue);

        if (!searchValue || searchValue.trim() === "") {
            console.warn("Valor de busca vazio, abortando requisição.");
            return;
        }

        try {
            const response = await api.get('/questions/text', {
                params: { text: searchValue }
            });
            setQuestions(response.data);
        } catch (error) {
            console.error("Error fetching questions by text:", error);
        }
    };

    const answerQuestion = async (key) => {
        try {
            if(!answers[key]){
                alert("Resposta Vazia");
                throw new Error("No Answer");
            }
            await api.post('/questions/answer', {
                answer: answers[key],
                key: key
            });
            // Refresh questions list after answering
            fetchQuestions();
        } catch (error) {
            console.error("Error answering question:", error);
        }
    };

    useEffect(() => {
        fetchQuestions();
        const username = GetCookie("username")
        if (!username){
            alert("Usuario nao identificado. Faça o Login!")
            navigate("/Login");
        }
    }, [fetchQuestions, navigate]);

    return (
        <div className="app-container">
                <form className="search-form">
                    <h1>Buscar pergunta por nome:</h1>
                    <input className="search-input" name="texto" type='text'
                        ref={searchText}
                    />
                    <button className="search-button" type="button"
                        onClick={fetchQuestionsByText}>
                        Procurar</button>
                </form>

            {questions.filter(question => question.answer === null).map(question => (
                <div className="question-list" key={question.key}>
                    <div className="question-card">
                    <p className = "question-text">
                        Pergunta: {question.question}
                    </p>
                    <input type='text' className="answer-input"
                        value={answers[question.key] || ""}
                        onChange={e =>
                            setAnswers({ ...answers, [question.key]: e.target.value })
                        }
                    />
                    <button type="button"
                        onClick={() => answerQuestion(question.key)}>
                        Responder
                    </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default QuestionApp;
