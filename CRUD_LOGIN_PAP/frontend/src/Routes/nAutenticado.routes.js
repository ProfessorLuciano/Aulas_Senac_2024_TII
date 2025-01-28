import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Inicio from '../Inicio'
import CadastrarUsuarios from '../CadastraUsuarios/CadastroUsuarios'

export default function NAutenticado() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={< Inicio />} />
                <Route path='/CadastroUsuarios' element={< CadastrarUsuarios />} />
                
                <Route path='*' element={< Inicio />} />
            </Routes>
        </BrowserRouter>
    )
}