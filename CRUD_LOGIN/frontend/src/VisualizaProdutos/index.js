import { useState, useContext, useEffect } from 'react'
import { AutenticadoContexto } from '../Contexts/authContexts'
import { useNavigate } from 'react-router-dom'
import apiLocal from './../Api/apiLocal'
import { toast } from 'react-toastify'
import './estilo.visualizaProdutos.scss'

export default function VisualizaProdutos() {

    const { verificarTokenCliente, verificarToken, autenticado } = useContext(AutenticadoContexto)
    const navegar = useNavigate()

    const [dados, setDados] = useState([''])
    const [tipo, setTipo] = useState('')
    const [n_pedido, setNPedido] = useState('')
    const [existePedido, setExistePedido] = useState(false)
    const [id_cliente, setIdCliente] = useState('')

    useEffect(() => {
        const tipoU = localStorage.getItem('@funcionario')
        setTipo(JSON.parse(tipoU))
        const clienteU = localStorage.getItem('@id')
        setIdCliente(JSON.parse(clienteU))
        const pedidoU = localStorage.getItem('@npedido')
        setNPedido(JSON.parse(pedidoU))
    }, [n_pedido])

    if (tipo === true) {
        verificarToken()
    } else {
        verificarTokenCliente()
    }


    useEffect(() => {
        async function consultarDados() {
            const resposta = await apiLocal.get('/ConsultarProdutos')
            setDados(resposta.data)
        }
        consultarDados()
        // eslint-disable-next-line
    }, [])

    async function adCarrinho(id1) {
        if (autenticado !== true) {
            navegar('/LoginClientes')
        } else if (existePedido === false) {
            try {
                const produto = dados.filter((item) => item.id === id1)
                const valor = Number(produto.map((item) => item.preco))
                const id_produto = String(produto.map((item) => item.id))
                const resposta = await apiLocal.post('/RealizarPedidos', {
                    id_cliente,
                    id_produto,
                    valor
                })
                localStorage.setItem('@npedido', JSON.stringify(resposta.data.n_pedido))
                localStorage.setItem('@id_pedido', JSON.stringify(resposta.data.id))
                setExistePedido(true)
                toast.success('Carrinho Criado Com Sucesso ', {
                    toastId: 'ToastID'
                })
            } catch (err) {
                console.log(err)
            }
        } else {
            try {
                const idPedido = localStorage.getItem('@id_pedido')
                const id_carrinho = JSON.parse(idPedido)
                const produto = dados.filter((item) => item.id === id1)
                const valor = Number(produto.map((item) => item.preco))
                const id_produto = String(produto.map((item) => item.id))
                const resposta = await apiLocal.post('/AdicionarItensPedidos', {
                    id_produto,
                    id_carrinho,
                    valor
                })
                toast.success(resposta.data.dados, {
                    toastId: 'ToastID'
                })
            } catch (err) {
                toast.warning(err.response.data.error, {
                    toastId: 'ToastID'
                })
            }
        }
    }
    console.log(tipo)
    return (
        <div className='conteinerGeralVisualizaProdutos'>
            <h1>Visualizar Produtos</h1>
            <div className='conteinerVisualizaImagensProdutos'>
                {dados.map((item) => {
                    return (
                        <div className='cardProdutos'>
                            <img src={`http://localhost:3333/files/${item.banner}`} alt='' />
                            <span>{item.nome}</span>
                            <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.preco)}</span>
                            {(tipo !== true || tipo === null) && (
                                <button onClick={() => adCarrinho(item.id)}>Adicionar</button>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}