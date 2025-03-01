import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Inicio from '../Inicio'
import LoginUsuarios from '../LoginUsuarios'

export default function NaoAutenticados() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/LoginUsuarios' element={<LoginUsuarios />} />
                
                <Route path='*' element={<Inicio />} />
            </Routes>
        </BrowserRouter>
    )
}