
//importação do conteiner de regras do react-toastify
import { ToastContainer } from 'react-toastify'
import Rotas from './Rotas.router'

export default function App() {
  return (
    <div>
      <Rotas />
      <ToastContainer
        autoClose={5000}
      />
    </div>
  )
}


