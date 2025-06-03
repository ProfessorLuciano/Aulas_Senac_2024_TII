import { createContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import apiLocal from '../Api/apiLocal'

export const AutenticadoContexto = createContext()

export function AuthProvider({ children }) {

    const [tokenT, setTokenT] = useState(false)
    const [loading, setLoading] = useState(false)
    const [token, setToken] = useState('')

    const autenticado = !!tokenT

    async function loginUsuarios(email, password){
        const resposta = await apiLocal.post('/LoginUsuarios', {
            email,
            password
        })
        await AsyncStorage.setItem('nome', JSON.stringify(resposta.data.nome))
        await AsyncStorage.setItem('token', JSON.stringify(resposta.data.token))
        setTokenT(true)
        setLoading(true)
    }

    return (
        <AutenticadoContexto.Provider value={({ loading, autenticado, loginUsuarios, token })}>
            {children}
        </AutenticadoContexto.Provider>
    )
}