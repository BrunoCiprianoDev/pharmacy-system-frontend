import React, { useState } from 'react'

import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'


const Login = () => {

    const navigate = useNavigate();

    const [credenciais, setCredenciais] = useState({ login: '', senha: '' });

    const { login, errorMessage } = useAuth();

    const logar = (e) => {
        e.preventDefault();
        login(credenciais);
    }

    return (
        <div className={styles['home-container']}>
            <h1>Sistema para farmacias</h1>
            <div className={styles['home-login-container']}>
                <h3>Insira o e-mail e senha</h3>
                <form onSubmit={(e) => logar(e)} className={styles['form-login-container']}>
                    <label>E-mail
                        <input
                            placeholder='usuário@email.com'
                            onChange={(e) => { setCredenciais({ ...credenciais, login: e.target.value }) }}
                        />
                    </label>
                    <label>Senha
                        <input
                            placeholder='*******'
                            type='password'
                            onChange={(e) => { setCredenciais({ ...credenciais, senha: e.target.value }) }}
                        />
                    </label>
                    <button className={styles['button-container']}>Entrar</button>
                </form>
            </div>
        </div>
    )
}

export default Login