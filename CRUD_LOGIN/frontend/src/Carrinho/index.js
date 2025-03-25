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
            async function buscarPedidosCliente(){
                const resposta = await apiLocal.get('/BuscarPedidosCliente', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setDados(resposta.data)
            }
            buscarPedidosCliente()
        } catch (err) {
                 
        }
        // eslint-disable-next-line
    }, [dados])



    return (
        <div className='conteinerGeralCarrinho'>
            <h1>Carrinho</h1>
            <table className='tabelaClasse'>
                <thead>
                    <tr>
                        <th>Número Pedido</th>
                        <th>Status Pedido</th>
                        <th>Ações</th>
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
        </div>
    )

}