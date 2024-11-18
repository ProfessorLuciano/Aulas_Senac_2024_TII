import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import apiLocal from './../Api/apiLocal'
import './estilo.editarUsuarios.scss'
import { toast } from 'react-toastify'

export default function EditarUsuarios() {
    const mudarTela = useNavigate()
    const { id } = useParams()
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        try {
            async function consultarDados() {
                const resposta = await apiLocal.post('/ConsultarUsuariosUnico', {
                    id
                })
                setNome(resposta.data.nome)
                setEmail(resposta.data.email)
                setPassword(resposta.data.senha)
            }
            consultarDados()
        } catch (err) {
            toast.error('Erro ao Comunicar com o Servidor', {
                toastId: 'ToastId'
            })
        }
    }, [])

    async function enviarAlteracao(e) {
        try {
            e.preventDefault()
            const resposta = await apiLocal.put('/AlterarDadosUsuarios', {
                id,
                nome,
                email
            })
            toast.success('Cadastro Alterado com Sucesso', {
                toastId: 'ToastId'
            })
            mudarTela('/')                        
        } catch (err) {
            toast.error('Erro ao Comunicar com o Servidor', {
                toastId: 'ToastId'
            })
        }       
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
                    disabled
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'>Enviar</button>
                <button type='submit' className='buttonVoltar' onClick={() => mudarTela('/')}>Voltar</button>
            </form>
        </div>
    )
}