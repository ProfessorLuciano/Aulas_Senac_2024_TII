import React, { useState } from 'react'
import ApiBuscaCep from './ApiCliente/ApiBuscaCep/apiBuscaCep'
import './App.css'

export default function App() {

  const [pegarCep, setPegarCep] = useState('')
  
  async function dadosFormulario(e){
    e.preventDefault()
    const resposta = await ApiBuscaCep.get(`/${pegarCep}/json`)
    console.log(resposta.data)   
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
    </div>

  )
}