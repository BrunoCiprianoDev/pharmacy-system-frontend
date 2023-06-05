import { useNavigate } from "react-router-dom";
import { urlServer } from "../serverConfig";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuth = () => {

    const { setAuth } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const login = async (usuario) => {

        setIsLoading(true);
        setErrorMessage("");
        console.log(usuario);

        //Get token jwt

        try {
            const response = await fetch(`${urlServer}/usuarios/auth`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    login: usuario.login,
                    senha: usuario.senha
                }),
            });

            if (!response.ok) {
                setErrorMessage('Error de authenticação!')
                console.log(response)
                return;
            }

            const credencial = await response.json();

            sessionStorage.setItem("credencial", JSON.stringify({
                token: credencial.token,
                rule: credencial.rule,
            }))
            setAuth(true);

            navigate('/funcionarios');

        } catch (error) {
            setErrorMessage(error.message);
        }
        setIsLoading(false);
    };
    return {
        login,
        isLoading,
        errorMessage
    }
}