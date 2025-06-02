import { useContext } from 'react'
import { AutenticadoContexto } from '../Contexts/AuthContexts'
import Autenticado from './Autenticado.routes'
import NAutenticado from './NAutenticado.routes'

export default function RotasIndex() {
    
    const { autenticado } = useContext(AutenticadoContexto)

    return (
        autenticado ? <Autenticado /> : <NAutenticado />
    )
}