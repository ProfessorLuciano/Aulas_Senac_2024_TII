import React from 'react'
import { Link } from 'react-router-dom'


export default function Erro404(){
    return(
        <div>
            <h1>pagina não encontrada</h1>
            <h2><Link to='/' >Voltar para o Inicio</Link></h2>
        </div>
    )
}