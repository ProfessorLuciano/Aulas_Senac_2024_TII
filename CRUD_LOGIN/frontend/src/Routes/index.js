import React from 'react'

import Autenticado from './autenticado.routes'
import NAutenticado from './nAutenticado.routes'


export default function Rotas(){
    const autenticado = false

    return(
        autenticado === true ? <Autenticado /> : <NAutenticado />
    )
}