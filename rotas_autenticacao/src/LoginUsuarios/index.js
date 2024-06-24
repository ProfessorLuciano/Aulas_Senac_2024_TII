import React, { useState } from 'react'

export default function LoginUsuarios() {

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    function logarUsuario(e){
        e.preventDefault()
        if(!usuario || !senha){
            alert('Campo em Branco')
            return
        }

        if(usuario === 'luciano' && senha === '123456'){
            alert('Autenticação com Sucesso')
        }else{
            alert('Usuario/Senha Incorretos')
        }
    }
    return (
        <div>
            <h1>Login de Usuarios</h1>
            <form onSubmit={logarUsuario}>
                <input 
                type="text" 
                placeholder='Digite o Usuário'
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                />
                <input 
                type="password" 
                placeholder='Digite a Senha'
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                />
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}