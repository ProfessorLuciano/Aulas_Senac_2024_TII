import React, { useState, useEffect } from 'react'
import './estilo.dashboard.scss'
import { toast } from 'react-toastify'
import apiLocal from './../Api/apiLocal'
import { Link } from 'react-router-dom'

export default function DashBoard() {
    
    const [dadosUsuarios, setDadosUsuarios] = useState([''])

    const iToken = localStorage.getItem('@token')
    const token = JSON.parse(iToken)    

    useEffect(() => {
        try {
            async function consultarDadosusuarios() {
                const resposta = await apiLocal.get('/ConsultarUsuarios', {
                    headers: {
                       // Authorization: 'Bearer ' + `${token}`
                        Authorization: `Bearer ${token}`
                    }
                })
                setDadosUsuarios(resposta.data)
            }
            consultarDadosusuarios()
        } catch (err) {
            toast.error('Erro ao Comunicar com BackEnd', {
                toastId: 'ToastId'
            })
        }
    }, [dadosUsuarios])

    async function apagaUsuarios(id) {
        try {
            await apiLocal.delete(`/ApagarUsuarios/${id}`)
            toast.success('Registro Apagado com Sucesso', {
                toastId: 'ToastId'
            })
        } catch (err) {
            toast.error('Erro ao Comunicar com BackEnd', {
                toastId: 'ToastId'
            })
        }
    }

    return (
        <>
            {dadosUsuarios.length === 0
                ?
                <div className='conteinerDashboardGeral'>
                    <h1>Pagina de DashBoard</h1>
                    <h1>Sem dados</h1>
                </div>
                :
                <div className='conteinerDashboardGeral'>
                    <h1>Pagina de DashBoard</h1>
                    <table className='usuariosTabela'>
                        <thead>
                            <tr key="">
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Grupo</th>
                                <th>Edita</th>
                                <th>Apaga</th>
                            </tr>
                            {dadosUsuarios.map((item) => {
                                return (
                                    <>
                                        <tr key="">
                                            <td>{item.id}</td>
                                            <td>{item.nome}</td>
                                            <td>{item.email}</td>
                                            {!item.grupos ?
                                                <td>Vazio</td>
                                                :
                                                <td>{item.grupos.nome}</td>
                                            }
                                            <td><Link to={`/EditarUsuarios/${item.id}`}>Editar</Link></td>
                                            <td><button type='submit' onClick={() => apagaUsuarios(item.id)}>Apagar</button></td>
                                        </tr>
                                    </>
                                )
                            })}
                        </thead>
                    </table>
                </div>
            }
        </>
    )
}