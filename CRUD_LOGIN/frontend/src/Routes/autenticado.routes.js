import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Cabecalho from '../Cabecalho'
import DashBoard from '../DashBoard'
import EditarUsuarios from '../EditarUsuarios/index'
import CadastroProdutos from '../CadastroProdutos'
import VisualizaProdutos from '../VisualizaProdutos'
import Carrinho from '../Carrinho'

export default function Autenticado() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Routes>
                <Route path='/' element={< DashBoard />} />
                <Route path='/EditarUsuarios/:id' element={< EditarUsuarios />} />
                <Route path='/CadastroProdutos' element={< CadastroProdutos />} />
                <Route path='/VisualizaProdutos' element={< VisualizaProdutos />} />
                <Route path='/Carrinho' element={< Carrinho />} />

                <Route path='*' element={< DashBoard />} />
            </Routes>
        </BrowserRouter>
    )
}