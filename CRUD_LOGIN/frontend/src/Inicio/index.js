import React, { useContext } from 'react'
import { AutenticadoContexto } from '../Contexts/authContexts'
import './estilo.inicio.scss'

export default function Inicio() {

    const { verificarToken } = useContext(AutenticadoContexto)
    verificarToken()

    return(
        <div className='conteinerInicioGeral'>
            <h1>Tela Inicio</h1>
        </div>
    )
}