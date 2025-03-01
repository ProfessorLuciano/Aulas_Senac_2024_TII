import { BrowserRouter, Routes, Route } from 'react-router-dom'

import DashBoard from '../DashBoard'

export default function Autenticados() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DashBoard />} />
                <Route path='*' element={<DashBoard />} />
            </Routes>
        </BrowserRouter>
    )
}