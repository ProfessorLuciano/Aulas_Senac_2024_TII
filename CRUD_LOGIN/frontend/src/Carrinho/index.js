import React, { useState, useContext } from 'react'
import { AutenticadoContexto } from '../Contexts/authContexts'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import apiLocal from '../Api/apiLocal'
import './estilo.cadastroPedidos.scss'

export default function Carrinho(){

    const { verificarToken, token } = useContext(AutenticadoContexto)
    verificarToken()
    
    return(
        <div>
            <h1>Carrinho</h1>
        </div>
    )
}