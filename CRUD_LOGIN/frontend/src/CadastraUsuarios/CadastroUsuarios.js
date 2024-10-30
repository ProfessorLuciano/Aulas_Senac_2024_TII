import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './estilo.cadUsuarios.scss'

export default function CadastrarUsuarios() {

    return (
        <div className='conteinerCadastroUsuariosGeral'>
            <h1>Formulario de Cadastro de Usuários</h1>
            <form>
                <input
                    type="text"
                    placeholder='Digite Seu Nome'
                />
                <input
                    type="text"
                    placeholder='Digite Seu E-Mail'
                />
                <input
                    type="password"
                    placeholder='Digite Sua Senha'
                />
                <button>Enviar</button>
            </form>
            <Link to='/' className='buttonVoltar' >Voltar Inicio</Link>
        </div>
    )
}