import React from 'react'

import Autenticados from './Autenticados.routes'
import NaoAutenticados from './NaoAutenticados.routes'

export default function Rotas(){
    const autenticado = false
    return(
        autenticado === true ? <Autenticados /> : <NaoAutenticados />
    )
}