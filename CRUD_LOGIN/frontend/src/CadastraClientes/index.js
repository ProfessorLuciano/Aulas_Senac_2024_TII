import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './estilo.cadClientes.scss'
import { toast } from 'react-toastify'
import apiLocal from '../Api/apiLocal'
import apiCep from '../Api/apiCep.js'

import { IMaskInput } from 'react-imask'


export default function CadastrarClientes() {

    const mudarTela = useNavigate()
    const [nome, setNome] = useState('')
    const [cpfMask, setCpfMask] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')

    const [cepAtribuido, setCepAtribuido] = useState('')

    useEffect(() => {
        function atribuiValores() {
            setRua(cepAtribuido.logradouro || rua)
            setBairro(cepAtribuido.bairro || bairro)
            setCidade(cepAtribuido.localidade || cidade)
            setEstado(cepAtribuido.uf || estado)
        }
        atribuiValores()
        // eslint-disable-next-line
    }, [buscaCep])

   
    async function cadastroClientes(e) {        
        try {
            e.preventDefault()

            if (!nome || !cpfMask || !email || !password || !cep || !rua || !numero || !bairro || !cidade || !estado) {
                alert("Campos em Branco")
                return
            }
            const cpf = cpfMask.match(/\d/g).join("")
            await apiLocal.post('/CadastrarClientes', {
                nome,
                cpf,
                email,
                password,
                cep,
                rua,
                numero,
                complemento,
                bairro,
                cidade,
                estado
            })
            toast.success('Cadastro Efetuado Com Sucesso', {
                toastId: 'ToastId'
            })
            mudarTela('/LoginClientes')

        } catch (err) {
            toast.error(err.response.data.error, {
                toastId: 'ToastId'
            })
        }
    }

    async function buscaCep() {
        const resposta = await apiCep(`${cep}/json`)
        setCepAtribuido(resposta.data)
    }

    return (
        <div className='conteinerCadastroClientesGeral'>
            <h1>Formulario de Cadastro de Clientes</h1>
            <form onSubmit={cadastroClientes}>
                <input
                    type="text"
                    placeholder='Digite Seu Nome'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <IMaskInput
                    type="text"
                    mask='000.000.000-00'
                    placeholder='CPF*'
                    value={cpfMask}
                    onChange={(e) => setCpfMask(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Digite Seu E-Mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Digite Sua Senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Digite Seu CEP'
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    onBlur={buscaCep}
                />
                <input
                    type="text"
                    placeholder='Digite Seu Endereço'
                    value={rua}
                    onChange={(e) => setRua(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Digite Seu Numero'

                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Digite Seu Complemento'
                    value={complemento}
                    onChange={(e) => setComplemento(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Digite Seu Bairro'
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Digite Seu Cidade'
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Digite Seu Estado'
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                />
                <button type='submit'>Enviar</button>
            </form>
            <Link to='/' className='buttonVoltar' >Voltar Inicio</Link>
        </div>
    )
}