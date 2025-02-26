import React, { useContext, useState } from 'react'
import { AutenticadoContexto } from '../Contexts/authContexts'
import { Link } from 'react-router-dom'
import './estilo.loginFuncionarios.scss'
import { toast } from 'react-toastify'

export default function LoginFuncionarios() {

    const { loginUsuarios, verificarToken } = useContext(AutenticadoContexto)
    verificarToken()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function dadosLogin(e) {
        e.preventDefault()
        if (!email || !password) {
            toast.warning('Preencha todos os campos')
            return
        }
        try {
            await loginUsuarios(email, password)
        } catch (err) {
            
        }
    }

    return (
        <div className='conteinerLoginFuncionariosGeral'>
            <h1>Pagina de Login Colaboradores</h1>
            <form onSubmit={dadosLogin}>
                <input
                    type="text"
                    placeholder='Digite o E-mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder='Digite a Senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button>Enviar</button>
            </form>
            <p>Para se cadastrar clique <Link to='/CadastroUsuarios'>AQUI</Link> </p>
        </div>
    )
}