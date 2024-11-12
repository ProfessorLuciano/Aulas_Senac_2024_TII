import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import apiLocal from './../Api/apiLocal'
import './estilo.editarUsuarios.scss'

export default function EditarUsuarios() {
    const { id } = useParams()
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        async function consultarDados(){
            const resposta = await apiLocal.post('/ConsultarUsuariosUnico', {
                id
            })
           setNome(resposta.data.nome)
           setEmail(resposta.data.email)
           setPassword(resposta.data.senha)
        }
        consultarDados()
    }, [])

    async function enviarAlteracao(e){
        e.preventDefault()
        alert(nome + email + password)
    }

    return (
        <div className='conteinerEditarUsuariosGeral'>
            <h1>Editar Usuários</h1>
            <form onSubmit={enviarAlteracao}>
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}