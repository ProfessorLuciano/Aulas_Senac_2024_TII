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
            async function visializaPedidos() {
                const resposta = await apiLocal.get('/VisualizaPedidosClientes', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setDados(resposta.data)
            }
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
        </div>
    )
}