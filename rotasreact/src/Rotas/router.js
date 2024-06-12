import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from '../Inicio'
import Contatos from '../Contatos'

export default function Rotas() {    

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Inicio /> } />
                <Route path='/Contatos' element={ <Contatos /> } />

                <Route path='*' element={ <Inicio /> } />
            </Routes>
        </BrowserRouter>
    )
}