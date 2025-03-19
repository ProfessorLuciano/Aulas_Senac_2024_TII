import { createContext, useState } from 'react'
import apiLocal from '../Api/apiLocal'
import { toast } from 'react-toastify'

export const AutenticadoContexto = createContext()

export default function AuthProvider({ children }) {

    const [tokenT, setTokenT] = useState(false)
    const [token, setToken] = useState('')

    const autenticado = !!tokenT

    async function verificarToken() {
        const iToken = localStorage.getItem('@token')
        if (!iToken) {
            setTokenT(false)
            return
        }
        const tokenU = JSON.parse(iToken)
        setToken(tokenU)
        try {
            const resposta = await apiLocal.get('/VerificaToken', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (resposta.data.id) {
                setTokenT(true)
                localStorage.setItem('@id', JSON.stringify(resposta.data.id))
                localStorage.setItem('@nome', JSON.stringify(resposta.data.nome))
            }
        } catch (err) {

        }
    }

    async function verificarTokenCliente() {
        const iToken = localStorage.getItem('@token')
        if (!iToken) {
            setTokenT(false)
            return
        }
        const tokenU = JSON.parse(iToken)
        setToken(tokenU)
        try {
            const resposta = await apiLocal.get('/VerificaTokenClientes', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (resposta.data.id) {
                setTokenT(true)
                localStorage.setItem('@id', JSON.stringify(resposta.data.id))
                localStorage.setItem('@nome', JSON.stringify(resposta.data.nome))
            }
        } catch (err) {

        }
    }

    async function loginUsuarios(email, password) {
        try {
            localStorage.clear()
            const resposta = await apiLocal.post('/LoginUsuarios', {
                email,
                password
            })
            localStorage.setItem('@id', JSON.stringify(resposta.data.id))
            localStorage.setItem('@token', JSON.stringify(resposta.data.token))
            localStorage.setItem('@nome', JSON.stringify(resposta.data.nome))
            localStorage.setItem('@funcionario', JSON.stringify(resposta.data.funcionario))
            setTokenT(true)
        } catch (err) {
            toast.error(err.response.data.error, {
                toastId: 'ToastId'
            })
        }
    }

    async function loginClientes(cpf, password) {
        try {
            localStorage.clear()
            const resposta = await apiLocal.post('/LoginClientes', {
                cpf,
                password
            })
            localStorage.setItem('@id', JSON.stringify(resposta.data.id))
            localStorage.setItem('@token', JSON.stringify(resposta.data.token))
            localStorage.setItem('@nome', JSON.stringify(resposta.data.nome))
            localStorage.setItem('@cliente', JSON.stringify(resposta.data.cliente))
            setTokenT(true)
        } catch (err) {
            toast.error(err.response.data.error, {
                toastId: 'ToastId'
            })
        }
    }

    return (
        <AutenticadoContexto.Provider value={({ autenticado, loginUsuarios, loginClientes, verificarToken, verificarTokenCliente, token })}>
            {children}
        </AutenticadoContexto.Provider>
    )


}