import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import DashBoard from '../DashBoard'
import EditarUsuarios from './../EditarUsuarios/index'

export default function Autenticado() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={< DashBoard />} />
                <Route path='/EditarUsuarios/:id' element={< EditarUsuarios />} />
                
                <Route path='*' element={< DashBoard />} />
            </Routes>
        </BrowserRouter>
    )
}