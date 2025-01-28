import React, { useContext } from 'react'
import { AutenticadoContexto } from '../Contexts/authContexts'

import Autenticado from './autenticado.routes'
import NAutenticado from './nAutenticado.routes'


export default function Rotas() {
    const { autenticado } = useContext(AutenticadoContexto)

    return (
        autenticado === true ? <Autenticado /> : <NAutenticado />
    )
}