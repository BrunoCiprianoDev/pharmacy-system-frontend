import { useNavigate } from "react-router-dom";
import { urlServer } from "../serverConfig";
import { useState } from "react";

export const useAuth = () => {

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
                    login: "cipriano@gmail.com",
                    senha: "p@ssw0rd"
                }),
            });

            if (!response.ok) {
               setErrorMessage('Error de authenticação!')
               console.log(response)
            }

            const credencial = await response.json();

            sessionStorage.setItem("credencial", JSON.stringify({
                token: credencial.token,
                rule: credencial.rule,

            }))

            // const { jwt, user: currentUser } = await response.json();

            // sessionStorage.setItem("credencial", JSON.stringify({
            //     login:
            //     jwt: jwt,
            //     email: currentUser.email,
            //     username: currentUser.username,
            //     type: currentUser.type
            // }));

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