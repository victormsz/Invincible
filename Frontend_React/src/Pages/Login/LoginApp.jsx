import { useRef, useEffect } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { GetCookie } from "../../services/CookieService";
import "./LoginApp.css"


function LoginApp() {

    const navigate = useNavigate();
    const LoginText = useRef();
    const PasswordText = useRef();


    const Login = async () => {
        try {
            await api.post('/login', {
                username: LoginText.current.value,
                password: PasswordText.current.value
            });
            document.cookie = `username=${LoginText.current.value}; path=/; max-age=10000`;
            navigate("/Questions");
        } catch (e) {
            console.log("Erro:", e);
        }
    }


    useEffect(() => {
        const username = GetCookie("username");

        if (username) {
            navigate("/Questions");
        }
    }, [navigate]);


    return (
        
        <div className="box">
            <form>
                <h1 className="login-text">Login</h1>
                <p className="header-input">Username</p>
                <input name="texto" className="login-input" type='text' ref={LoginText} />
                <p className="header-input">Password</p>
                <input name="password" className="login-input" type='password' ref={PasswordText} />
                <button type="button" className="btn-login" onClick={Login}>LOGIN</button>
            </form>
        </div>
    );


}
export default LoginApp

