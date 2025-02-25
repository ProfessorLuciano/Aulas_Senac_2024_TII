import React, { useContext, useState } from 'react'
import { AutenticadoContexto } from '../Contexts/authContexts'
import { Link } from 'react-router-dom'
import './estilo.loginClientes.scss'
import { toast } from 'react-toastify'

export default function LoginClientes() {

    const { loginClientes, verificarToken } = useContext(AutenticadoContexto)
    verificarToken()

    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')

    async function dadosLogin(e) {
        e.preventDefault()
        if (!cpf || !password) {
            toast.warning('Preencha todos os campos')
            return
        }
        try {
            await loginClientes(cpf, password)
        } catch (err) {
            
        }
    }

    return (
        <div className='conteinerLoginFuncionariosGeral'>
            <h1>Pagina de Login Clientes</h1>
            <form onSubmit={dadosLogin}>
                <input
                    type="text"
                    placeholder='Digite o CPF'
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />

                <input
                    type="password"
                    placeholder='Digite a Senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button>Enviar</button>
            </form>
            <p>Para se cadastrar clique <Link to='/CadastrarClientes'>AQUI</Link> </p>
        </div>
    )
}