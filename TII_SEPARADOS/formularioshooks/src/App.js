import React, { useState } from 'react'
import './App.css'

export default function App() {

  const [nomeUsuario, setNomeUsuario] = useState('')
  const [senhaUsuario, setSenhaUsuario] = useState('')

  function pegarDadosUsuario(e){
    e.preventDefault()
    console.log(nomeUsuario, senhaUsuario)
  }

  return (
    <div>
      <h1>Formularios e Hooks</h1>
      <form onSubmit={pegarDadosUsuario} >
        <input
          type="text"
          placeholder='Digite o Usuário'
          value={nomeUsuario}
          onChange={(e) => setNomeUsuario(e.target.value)}
        />
        <input
          type="password"
          placeholder='Digite a Senha'
          value={senhaUsuario}
          onChange={(e) => setSenhaUsuario(e.target.value)}
        />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}
