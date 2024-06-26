import React, { useState } from 'react'

//importação da biblioteca de navegação do react-router-dom
import { useNavigate } from 'react-router-dom'

//importação da função de alerta do react-toastify
import { toast } from 'react-toastify'

export default function Login() {

    //criação de uma constante para atribuir todas as funcionalidades da biblioteca useNavigate
    const navegacao = useNavigate()

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    function logarUsuarios(e) {
        e.preventDefault()

        if (!usuario || !senha) {
            alert('Campos em Branco')
            return
        }

        if (usuario === 'luciano' && senha === '123456') {
            toast.success('Login Efetuado com Sucesso')
            //Ação de mudança de pagina automatica depois do login com sucesso
            navegacao('/Navegacao')

        } else {
            toast.error('Usuario/Senha incorretos')
        }


    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={logarUsuarios}>
                <input
                    type="text"
                    placeholder='Digite o Usuário'
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Digite a Senha'
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}