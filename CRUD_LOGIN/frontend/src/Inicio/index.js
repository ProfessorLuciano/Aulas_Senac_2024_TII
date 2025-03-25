import React, { useContext, useEffect, useState } from 'react'
import { AutenticadoContexto } from '../Contexts/authContexts'
import './estilo.inicio.scss'

export default function Inicio() {

    const { verificarTokenCliente, verificarToken } = useContext(AutenticadoContexto)

    const [tipo, setTipo] = useState('')
    useEffect(() => {
        const tipoU = localStorage.getItem('@funcionario')
        setTipo(JSON.parse(tipoU))
    }, [tipo])
    
    if(tipo === true){
        verificarToken()
    }else{
        verificarTokenCliente()
    }

    return(
        <div className='conteinerInicioGeral'>
            <h1>Tela Inicio</h1>
        </div>
    )
}