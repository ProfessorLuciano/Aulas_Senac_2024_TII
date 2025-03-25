import React, { useState, useContext, useEffect } from 'react'
import { AutenticadoContexto } from '../Contexts/authContexts'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import apiLocal from '../Api/apiLocal'
import './estilo.cadastroPedidos.scss'

export default function Carrinho() {

    const { verificarToken, token } = useContext(AutenticadoContexto)
    verificarToken()

    const [dados, setDados] = useState([''])

    useEffect(() => {
        try {
<<<<<<< HEAD
            async function buscarPedidosCliente(){
                const resposta = await apiLocal.get('/BuscarPedidosCliente', {
=======
            async function visializaPedidos() {
                const resposta = await apiLocal.get('/VisualizaPedidosClientes', {
>>>>>>> eea76d26348576a02e97baca48105a46a7ac91a5
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setDados(resposta.data)
            }
<<<<<<< HEAD
            buscarPedidosCliente()
        } catch (err) {
            
        }
    }, [])
    
    return(
        <div className='conteinerGeralCarrinho'>
            <h1>Carrinho</h1>
            <table className='tabelaClasse'>
                <thead>
                    <tr>
                        <td>Número Pedido</td>
                        <td>Status Pedido</td>
                        <td>Ações</td>
                    </tr>
                </thead>
            </table>
            {dados.map((item) => (
                <>
                <table>
                    <thead>
                        <tr>
                            <td>{item.n_pedido}</td>
                            <td>{item.status}</td>
                            <td>Visualizar - Apagar</td>
                        </tr>
                    </thead>
                </table>
                </>
            ))}
=======
            visializaPedidos()
        } catch (err) {

        }
        // eslint-disable-next-line
    }, [dados])

    return (
        <div>
            <h1>Carrinho</h1>
            <table>
                <thead>
                    <tr>
                        <th>Numero Pedido</th>
                        <th>Status Pedido</th>
                        <th>Valor Pedido</th>
                        <th>Ações</th>
                    </tr>
                    {dados.map((item) => {
                        return (
                            <>
                                <tr>
                                    <td>{item.n_pedido}</td>
                                    <td>{item.status}</td>
                                    <td>{item.valor_total}</td>
                                    <td>Visualizar - Apagar</td>
                                </tr>
                            </>
                        )
                    })}

                </thead>
            </table>
>>>>>>> eea76d26348576a02e97baca48105a46a7ac91a5
        </div>
    )
}