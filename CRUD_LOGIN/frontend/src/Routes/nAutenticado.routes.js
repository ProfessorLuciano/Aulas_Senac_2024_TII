import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Inicio from '../Inicio'

export default function NAutenticado() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={< Inicio />} />
                
                <Route path='*' element={< Inicio />} />
            </Routes>
        </BrowserRouter>
    )
}