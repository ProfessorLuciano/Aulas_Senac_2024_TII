import React, { useContext, useState, useEffect } from 'react'
import { AutenticadoContexto } from '../Contexts/authContexts'
import './estilo.dashboard.scss'
//import { toast } from 'react-toastify'
//import apiLocal from './../Api/apiLocal'
//import { Link } from 'react-router-dom'

export default function DashBoard() {

    const { verificarTokenCliente, verificarToken } = useContext(AutenticadoContexto)

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

    return (
        <>
            {tipo === true ?
                <div className='conteinerDashboardGeral'>
                    <h1>DashBoard Funcionarios</h1>
                </div>
                :
                <div className='conteinerDashboardGeral'>
                    <h1>DashBoard Clientes</h1>
                </div>
            }
        </>
    )
}