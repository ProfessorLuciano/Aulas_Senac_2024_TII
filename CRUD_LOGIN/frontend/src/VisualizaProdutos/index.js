import { useState, useContext, useEffect } from 'react'
import { AutenticadoContexto } from '../Contexts/authContexts'
import apiLocal from './../Api/apiLocal'

export default function VisualizaProdutos() {

    const { verificarToken, token } = useContext(AutenticadoContexto)
    verificarToken()

    const [dados, setDados] = useState([''])

    useEffect(() => {
        async function consultarDados() {
            const resposta = await apiLocal.get('/ConsultarProdutos', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setDados(resposta.data)
        }
        consultarDados()
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <h1>Visualizar Produtos</h1>
            {dados.map((item) => {
                return (
                    <>
                        <span>{item.nome}</span>
                        <span>{item.preco}</span>
                        <span><img src={`http://localhost:3333/files/9c5c4b5fd1e06ffaf38021b9129d441e-coca.png`} alt='' />  </span>
                    </>
                )
            })}
        </div>
    )
}