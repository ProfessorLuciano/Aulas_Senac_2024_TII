import React, { useContext } from 'react'

import { AutContexts } from '../Components/Contexts/Contexts'

import NoAuthRotas from '../Routes/noAuth.routes'
import AuthRotas from '../Routes/auth.routes'

export default function RotasIndex() {
    const { autenticado } = useContext(AutContexts)

    return(
        autenticado === false ? <NoAuthRotas /> : <AuthRotas />
    )
}