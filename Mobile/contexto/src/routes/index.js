import { useContext } from 'react'
import { SafeAreaView, ActivityIndicator } from 'react-native'
import { AutenticadoContexto } from '../Contexts/AuthContexts'
import Autenticado from './Autenticado.routes'
import NAutenticado from './NAutenticado.routes'

export default function RotasIndex() {
    
    const { autenticado, loading } = useContext(AutenticadoContexto)
    console.log(autenticado, loading)

    if (loading === false && autenticado === true){
        return (
            <SafeAreaView
                style={{
                    flex: 1,
                    backgroundColor: '#f5f7fb',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <ActivityIndicator size={60} color='1d1d2e' />

            </SafeAreaView>
        )
    }

    return (
        autenticado === true ? <Autenticado /> : <NAutenticado />
    )
}