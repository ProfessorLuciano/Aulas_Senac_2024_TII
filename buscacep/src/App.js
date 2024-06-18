import React, { useState } from 'react'
import ApiBuscaCep from './ApiCliente/ApiBuscaCep/apiBuscaCep'
import './App.css'

export default function App() {

  const [pegarCep, setPegarCep] = useState('')
  const [dadosViaCep, setDadosViaCep] = useState('')
  
  async function dadosFormulario(e){
    e.preventDefault()
    const resposta = await ApiBuscaCep.get(`/${pegarCep}/json`)
    setDadosViaCep(resposta.data)   
  }

  return (
    <div>
      <h1>Busca Cep Via CEP</h1>
      <form onSubmit={dadosFormulario}>
        <input
          type="text"
          placeholder='Digite o CEP'
          value={pegarCep}
          onChange={(e) => setPegarCep(e.target.value)}
        />
        <button type='submit'>Enviar</button>
      </form>
      <p>A Rua é: {dadosViaCep.logradouro} </p>
      <p>A Cidade é: {dadosViaCep.localidade}</p>
      <p>O Estado é: {dadosViaCep.uf}</p>
    </div>

  )
}