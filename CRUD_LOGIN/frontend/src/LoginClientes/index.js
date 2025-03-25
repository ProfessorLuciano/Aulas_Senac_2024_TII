import React, { useContext, useState, useEffect } from 'react'
import { AutenticadoContexto } from '../Contexts/authContexts'
import { Link } from 'react-router-dom'
import './estilo.loginClientes.scss'
import { toast } from 'react-toastify'
import { IMaskInput } from 'react-imask'

export default function LoginClientes() {

   const { loginClientes, verificarTokenCliente, verificarToken } = useContext(AutenticadoContexto)
   
       const [tipo, setTipo] = useState('')
       useEffect(() => {
           const tipoU = localStorage.getItem('@funcionario')
           setTipo(JSON.parse(tipoU))
       }, [tipo])
   
       if (tipo === true) {
           verificarToken()
       } else {
           verificarTokenCliente()
       }

    const [cpfMask, setCpfMask] = useState('')
    const [password, setPassword] = useState('')

    async function dadosLogin(e) {
        e.preventDefault()
        if (!cpfMask || !password) {
            toast.warning('Preencha todos os campos')
            return
        }
        try {
            const cpf = cpfMask.match(/\d/g).join("")
            await loginClientes(cpf, password)
        } catch (err) {

        }
    }

    return (
        <div className='conteinerLoginFuncionariosGeral'>
            <h1>Pagina de Login Clientes</h1>
            <form onSubmit={dadosLogin}>
                <IMaskInput
                    type="text"
                    mask='000.000.000-00'
                    placeholder='Digite o CPF'
                    value={cpfMask}
                    onChange={(e) => setCpfMask(e.target.value)}
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