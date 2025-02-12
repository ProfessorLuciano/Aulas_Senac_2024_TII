import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import DashBoard from '../DashBoard'
import EditarUsuarios from '../EditarUsuarios/index'
import Produtos from '../Produtos'
import VisualizaProdutos from '../VisualizaProdutos'

export default function Autenticado() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={< DashBoard />} />
                <Route path='/EditarUsuarios/:id' element={< EditarUsuarios />} />
                <Route path='/Produtos' element={< Produtos />} />
                <Route path='/VisualizaProdutos' element={< VisualizaProdutos />} />
                
                <Route path='*' element={< DashBoard />} />
            </Routes>
        </BrowserRouter>
    )
}