import { createContext, useState } from 'react'
import apiLocal from '../Api/apiLocal'
import { toast } from 'react-toastify'

export const AutenticadoContexto = createContext()

export default function AuthProvider({ children }) {

    const [tokenT, setTokenT] = useState(false)
    const [token, setToken] = useState('')

    const autenticado = !!tokenT

    async function verificarToken(){
        const iToken = localStorage.getItem('@token')
        if(!iToken){
            setTokenT(false)
            return
        }
        const tokenU = JSON.parse(iToken)
        setToken(tokenU)

        const resposta = await apiLocal.get('/VerificaToken', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }

    async function loginEntrada(email, password){
        try {
            const resposta = await apiLocal.post('/LoginUsuarios', {
                email,
                password
            })
           
            localStorage.setItem('@id', JSON.stringify(resposta.data.id))
            localStorage.setItem('@token', JSON.stringify(resposta.data.token))
            localStorage.setItem('@nome', JSON.stringify(resposta.data.nome))
            setTokenT(true)
        } catch (err) {
            toast.error(err.response.data.error)            
        }
    }

    return (
        <AutenticadoContexto.Provider value={({ autenticado, loginEntrada, verificarToken })}>
            {children}
        </AutenticadoContexto.Provider>
    )


}