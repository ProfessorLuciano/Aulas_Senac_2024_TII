import React from 'react'
import { useParams } from 'react-router-dom'

export default function EditarUsuarios(){
    const { id } = useParams()
    return(
        <div>
        <h1>Editar Usuários</h1>
        {id}        
        </div>
    )
}