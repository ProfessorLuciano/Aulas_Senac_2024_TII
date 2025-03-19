import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AutenticadoContexto } from '../Contexts/authContexts'
import './estilo.cabecalho.scss'
import CRUD from '../imagens/crud.webp'


export default function Cabecalho() {

    const {autenticado, verificarTokenCliente, verificarToken } = useContext(AutenticadoContexto)

    const [tipo, setTipo] = useState('')
    useEffect(() => {
        const tipoU = localStorage.getItem('@funcionario')
        setTipo(JSON.parse(tipoU))
    }, [tipo])

    if (tipo === true) {
        verificarToken()
    } else {
        verificarTokenCliente()
    }

    const navigator = useNavigate()

    const [funcionario, setFuncionario] = useState('')
    const [cliente, setCliente] = useState('')

    useEffect(() => {
        const funcionarioT = localStorage.getItem('@funcionario')
        setFuncionario(JSON.parse(funcionarioT))
        const clienteT = localStorage.getItem('@cliente')
        setCliente(JSON.parse(clienteT))
    }, [])

    function sairSistema() {
        localStorage.clear()
        navigator('/')
    }
    return (
        <div className='conteinetCabecalhoGeral'>
            <div className='conteinerCabecalhoLogoBotoes'>
                <div className='conteinerCabecalhoLogo'>
                    <img src={CRUD} alt='Crud' />
                </div>
                <div className='conteinerCabecalhoBotoes'>
                    {autenticado === false && (
                        <>
                            <Link to=''>Início</Link>
                            <Link to=''>Quem Somos</Link>
                            <Link to='/VisualizaProdutos'>Visualiza Produtos</Link>
                            <Link to='/LoginClientes'>Área do Cliente</Link>
                            <Link to='/LoginFuncionarios'>Área do Colaborador</Link>
                        </>
                    )}
                    {(autenticado === true && funcionario === true) && (
                        <>
                            <Link to='/CadastroProdutos'>Cadastro de Produtos</Link>
                            <Link to='/VisualizaProdutos'>Visualiza Produtos</Link>
                            <Link to=''>Visualiza Pedidos</Link>
                        </>
                    )}
                    {(autenticado === true && cliente === true) && (
                        <>
                            <Link to='/VisualizaProdutos'>Visualiza Produtos</Link>
                            <Link to='/Carrinho'>Carrinho</Link>
                        </>
                    )}                    
                    {autenticado === true && (
                        <button onClick={sairSistema}>Sair</button>
                    )}
                </div>
            </div>
        </div>
    )
}