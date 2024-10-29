import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import DashBoard from '../DashBoard'

export default function Autenticado() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={< DashBoard />} />
                
                <Route path='*' element={< DashBoard />} />
            </Routes>
        </BrowserRouter>
    )
}