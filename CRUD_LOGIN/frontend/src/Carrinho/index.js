import React, { useState, useContext, useEffect } from 'react'
import { AutenticadoContexto } from '../Contexts/authContexts'
//import { useNavigate } from 'react-router-dom'
import Modal from 'react-modal'
import { toast } from 'react-toastify'
import apiLocal from '../Api/apiLocal'
import './estilo.cadastroPedidos.scss'

export default function Carrinho() {

    const { verificarToken, token } = useContext(AutenticadoContexto)
    verificarToken()

    const [dados, setDados] = useState([''])
    const [carrinhoAberto, setCarrinhoAberto] = useState(false)
    const [modalAberto, setModalAberto] = useState(false)
    const [loading, setLoading] = useState(false)
    const [dadosPedido, setDadosPedido] = useState([''])


    useEffect(() => {
        try {
            async function buscarPedidosCliente() {
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

    useEffect(() => {
        const nPedidoU = localStorage.getItem('@npedido')
        const pedidoU = JSON.parse(nPedidoU)
        if (pedidoU !== null) {
            setCarrinhoAberto(true)
        }
    }, [])

    function reabrirCarrinho(idd) {
        const produto = dados.filter((item) => item.id === idd)
        const pedido1 = String(produto.map((item) => item.n_pedido))
        const id1 = String(produto.map((item) => item.id))
        localStorage.setItem('@npedido', JSON.stringify(pedido1))
        localStorage.setItem('@id_pedido', JSON.stringify(id1))
        setCarrinhoAberto(true)
    }

    async function apagarCarrinho(idd) {
        try {
            const resposta = await apiLocal.delete(`/ApagarCarrinho/${idd}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success(resposta.data.dados, {
                toastId: 'ToastId'
            })
            localStorage.removeItem('@npedido')
            localStorage.removeItem('@id_pedido')
        } catch (err) {
            toast.error(err.response.data.error, {
                toastId: 'ToastId'
            })

        }
    }

    async function visualizarPedido(idd) {
        try {
            const id = idd
            const resposta = await apiLocal.post('/visualizaPedidoClienteUnico', {
                id
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (resposta.data.id) {
                setDadosPedido(resposta.data)
                setLoading(true)
                setModalAberto(true)
            } else {
                setLoading(false)
            }
        } catch (err) {

        }
    }

    function fecharModal() {
        setModalAberto(false)
        setLoading(false)
    }

    return (
        <div className='conteinerGeralCarrinho'>
            <h1>Carrinho</h1>
            <table className='dadosTabelasPedidos'>
                <thead>
                    <tr>
                        <th>Numero Pedido</th>
                        <th>Status Pedido</th>
                        <th>Ações</th>
                    </tr>
                    {dados.map((item) => {
                        return (
                            <>
                                <tr>
                                    <td>{item.n_pedido}</td>
                                    <td>{item.status}</td>
                                    {
                                        carrinhoAberto === true
                                            ?
                                            <>
                                                <td><button onClick={() => visualizarPedido(item.id)}>Visualizar</button>
                                                    {
                                                        item.status !== 'Finalizado'
                                                            ?
                                                            <button onClick={() => apagarCarrinho(item.id)}>Apagar</button>
                                                            :
                                                            <button disabled style={{opacity: 0.5, cursor:  "not-allowed"}}>Apagar</button>

                                                    }
                                                </td>
                                            </>
                                            :
                                            <td><button onClick={() => reabrirCarrinho(item.id)}>Reabrir Carrinho</button></td>
                                    }
                                </tr>
                            </>
                        )
                    })}
                </thead>
            </table>
            {loading === true && (
                <Modal
                    className="Modal"
                    isOpen={modalAberto}
                >
                    <div className='conteinerModal'>
                        <h1>Visualização do Pedido</h1>
                        <table className='dadosTabelasPedidosModal'>
                            <thead>
                                <tr key="">
                                    <th>Numero Pedido</th>
                                    <th>Nome Produto</th>
                                    <th>Quantidade</th>
                                    <th>Valor Unitario</th>
                                    <th>Valor Total</th>
                                    <th>Ações</th>
                                </tr>
                                {dadosPedido.itens.map((item) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{dadosPedido.n_pedido}</td>
                                                <td>{item.produtos.nome}</td>
                                                <td>{item.quantidade}</td>
                                                <td>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.valor)}</td>
                                                <td>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.valor * item.quantidade)}</td>
                                                <td>Apagar</td>
                                            </tr>
                                        </>
                                    )
                                })}

                            </thead>
                        </table>

                        <div className='botoesAcao'>
                            <button className='botaoEnviarModal'>Fazer Pedido</button>
                            <button className='botaoSairModal' onClick={fecharModal}>Fechar Pedido</button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    )
}