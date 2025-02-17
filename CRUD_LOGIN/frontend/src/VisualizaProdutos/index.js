import { useState, useContext, useEffect } from 'react'
import { AutenticadoContexto } from '../Contexts/authContexts'
import apiLocal from './../Api/apiLocal'
import './estilo.visualizaProdutos.scss'

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
        <div className='conteinerGeralVisializaProdutos'>
            <h1>Visualizar Produtos</h1>
            {dados.map((item) => {
                return (
                    <div className='conteinerImagensProdutos'>
                        <div className='cardProdutos'>
                            <img src={`http://localhost:3333/files/${item.banner}`} alt='' />
                            <p>{item.nome}</p>
                            <p>R$ {item.preco}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}