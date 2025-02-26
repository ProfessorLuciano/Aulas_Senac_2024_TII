import React, { useContext } from 'react'
import { AutenticadoContexto } from '../Contexts/authContexts'
import './estilo.dashboard.scss'
//import { toast } from 'react-toastify'
//import apiLocal from './../Api/apiLocal'
//import { Link } from 'react-router-dom'

export default function DashBoard() {

    const { verificarToken } = useContext(AutenticadoContexto)
    verificarToken()

    return (
        <>
            <div className='conteinerDashboardGeral'>
                <h1>Pagina de DashBoard</h1>             
            </div>           
        </>
    )
}