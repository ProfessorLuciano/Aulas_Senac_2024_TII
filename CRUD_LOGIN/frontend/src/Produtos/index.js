import React, { useState, useEffect, useContext } from 'react'
import { AutenticadoContexto } from '../Contexts/authContexts'
import { toast } from 'react-toastify'
import apiLocal from './../Api/apiLocal'
import './estilo.produtos.scss'

export default function Produtos() {

    const { verificarToken, token } = useContext(AutenticadoContexto)
    verificarToken()

    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [imagem, setImagem] = useState(null)

    function pegarImagem(e) {
        if (!e.target.files) {
            return
        }
        const image = e.target.files[0]
        if (image.type === 'image/png' || image.type === 'image/jpeg') {
            setImagem(image)
        }
    }

    async function cadastrarProduto(e){
        try {
            e.preventDefault()
            const data = new FormData()
            data.append('nome', nome)
            data.append('preco', preco)
            data.append('file', imagem)

            const resposta = await apiLocal.post('/CriarProdutos', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success(resposta.data.dados)            
        } catch (err) {
            console.log(err)            
        }
    }

    console.log(nome, preco, imagem)

    return (
        <div className='conteinerGeralProdutos'>
            <h1>Produtos</h1>
            <form onSubmit={cadastrarProduto}>
                <input
                    type='text'
                    placeholder='Nome do Produto'
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Preço do Produto'
                    value={preco}
                    onChange={e => setPreco(e.target.value)}
                />
                <input
                    type='file'
                    accept='image/jpeg, image/png'
                    //value={setImagem}
                    onChange={pegarImagem}
                />
                <button type='submit'>Cadastrar Produto</button>
            </form>
        </div>
    )
}