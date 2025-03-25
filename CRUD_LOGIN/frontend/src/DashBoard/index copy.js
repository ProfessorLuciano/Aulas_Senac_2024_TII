import React, { useState, useEffect, useContext } from 'react'
import { AutenticadoContexto } from '../Contexts/authContexts'
import './estilo.dashboard.scss'
import { toast } from 'react-toastify'
import apiLocal from './../Api/apiLocal'
import { Link } from 'react-router-dom'

import { CirclesWithBar } from 'react-loader-spinner'

export default function DashBoard() {

    const { verificarToken, token } = useContext(AutenticadoContexto)
    verificarToken()
    
    const [dadosUsuarios, setDadosUsuarios] = useState([''])
    const [load, setLoad] = useState(false)

    useEffect(() => {
        setLoad(false)
        try {
            async function consultarDadosusuarios() {
                const resposta = await apiLocal.get('/ConsultarUsuarios', {
                    headers: {
                        // Authorization: 'Bearer ' + `${token}`
                        Authorization: `Bearer ${token}`
                    }
                })
                if (resposta.data.dados === 'Token Inválido') {
                    setLoad(false)
                } else {
                    setDadosUsuarios(resposta.data)
                    setLoad(true)
                }
            }
            consultarDadosusuarios()
        } catch (err) {
            toast.error('Erro ao Comunicar com BackEnd', {
                toastId: 'ToastId'
            })
        }
        // eslint-disable-next-line
    }, [token])

    async function apagaUsuarios(id) {
        try {
            await apiLocal.delete(`/ApagarUsuario/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
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
                    <div className='botoesProdutos'>
                        <Link to={'/Produtos'} className='linkProdutos'>Produtos</Link>
                        <Link to={'/VisualizaProdutos'} className='linkProdutos'>Visualizar Produtos</Link>
                    </div>                    
                    {load === false ?
                        <CirclesWithBar
                            height="100"
                            width="100"
                            color="#4fa94d"
                            outerCircleColor="#ffffff"
                            innerCircleColor="#000000"
                            barColor="#0000ff"
                            ariaLabel="circles-with-bar-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                        :
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
                                <>
                                    {dadosUsuarios.map((item) => {
                                        return (
                                            <>
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    {/*<td>{item.nome[0].toUpperCase() + item.nome.slice(1)}</td>*/}
                                                    <td>{item.nome.toUpperCase()}</td>
                                                    <td>{item.email}</td>
                                                    {!item.grupos ?
                                                        <td>Vazio</td>
                                                        :
                                                        <>
                                                            {/*<td>{item.grupos.nome[0].toUpperCase() + item.grupos.nome.slice(1)}</td>*/}
                                                            <td>{item.grupos.nome.toUpperCase()}</td>
                                                        </>
                                                    }
                                                    <td><Link to={`/EditarUsuarios/${item.id}`} className='button3'>Editar</Link></td>
                                                    <td><button className='button2' type='submit' onClick={() => apagaUsuarios(item.id)}>Apagar</button></td>
                                                </tr>
                                            </>
                                        )
                                    })}
                                </>
                            </thead>
                        </table>
                    }
                </div>
            }
        </>
    )
}