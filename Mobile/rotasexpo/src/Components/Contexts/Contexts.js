import { useState, createContext } from 'react'

export const AutContexts = createContext()

export default function AutProvider({ children }) {

    const [token, setToken] = useState('')
    const [loading, setLoading] = useState('')

    const autenticado = true

    return(
        <AutContexts.Provider value={{autenticado}}>
            {children}
        </AutContexts.Provider>
    )

}