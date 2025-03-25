import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Cabecalho from '../Cabecalho'
import Inicio from '../Inicio'
import LoginFuncionarios from '../LoginFuncionarios'
import LoginClientes from '../LoginClientes'
import CadastrarUsuarios from '../CadastraUsuarios'
import VisualizaProdutos from '../VisualizaProdutos'
import CadastrarClientes from '../CadastraClientes'

export default function NAutenticado() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Routes>
                <Route path='/' element={< Inicio />} />
                <Route path='/CadastroUsuarios' element={< CadastrarUsuarios />} />
                <Route path='/CadastrarClientes' element={< CadastrarClientes />} />
                <Route path='/LoginFuncionarios' element={< LoginFuncionarios />} />
                <Route path='/LoginClientes' element={< LoginClientes />} />
                <Route path='/VisualizaProdutos' element={< VisualizaProdutos />} />

                <Route path='*' element={< Inicio />} />
            </Routes>
        </BrowserRouter>
    )
}