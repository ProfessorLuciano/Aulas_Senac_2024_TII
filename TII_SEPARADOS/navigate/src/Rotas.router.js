import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './Login'
import Navegacao from './Navigate'


export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/Navegacao' element={<Navegacao />} />

                <Route path='*' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}