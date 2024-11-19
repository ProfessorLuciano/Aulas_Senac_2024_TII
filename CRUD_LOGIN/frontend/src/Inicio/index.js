import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './estilo.inicio.scss'


export default function Inicio() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='conteinerInicioGeral'>
            <h1>Pagina de Inicio CRUD Login</h1>

            <form>
                <input
                    type="text"
                    placeholder='Digite o E-mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder='Digite a Senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button>Enviar</button>
            </form>
            <p>Para se cadastrar clique <Link to='/CadastroUsuarios'>AQUI</Link> </p>
        </div>
    )
}