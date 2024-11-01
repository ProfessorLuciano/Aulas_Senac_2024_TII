import React, { useState, useEffect } from 'react'
import './estilo.dashboard.scss'
import { toast } from 'react-toastify'
import apiLocal from './../Api/apiLocal'

export default function DashBoard() {

    const [dadosUsuarios, setDadosUsuarios] = useState([''])

    useEffect(() => {
        try {
            async function consultarDadosusuarios() {
                const resposta = await apiLocal.get('/ConsultarUsuarios')
                setDadosUsuarios(resposta.data)
            }
            consultarDadosusuarios()
        } catch (err) {
            toast.error('Erro ao Comunicar com BackEnd', {
                toastId: 'ToastId'
            })
        }
    }, [dadosUsuarios])

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
                                            <td><button>Editar</button></td>
                                            <td><button>Apagar</button></td>
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