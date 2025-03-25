import React from 'react'
import Rotas from './Routes'
import AuthProvider from './Contexts/authContexts'
import { ToastContainer } from 'react-toastify'

export default function App() {
  return (
    <AuthProvider>
      <div>
        <Rotas />
        <ToastContainer
          autoClose={5000}
        />
      </div>
    </AuthProvider>

  )
}


