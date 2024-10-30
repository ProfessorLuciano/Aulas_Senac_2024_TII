import React from 'react'
import Rotas from './Routes'
import { ToastContainer } from 'react-toastify'

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


