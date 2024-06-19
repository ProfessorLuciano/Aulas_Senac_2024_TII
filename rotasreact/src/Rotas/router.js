import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from '../Inicio'
import Contatos from '../Contatos'

import Erro from '../Erro/404'

export default function Rotas() {    

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Inicio /> } />
                <Route path='/Contatos' element={ <Contatos /> } />

                <Route path='*' element={ <Erro /> } />
            </Routes>
        </BrowserRouter>
    )
}