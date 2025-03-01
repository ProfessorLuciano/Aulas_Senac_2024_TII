import React, { useState } from 'react'
import Modal from 'react-modal'
import './index.css'

export default function App() {

  const [modalAberto, setModalAberto] = useState(false)

  
    function abrirModal(){
      setModalAberto(true)
    }
  
  function fecharModal(){
    setModalAberto(false)
  }

  return (
    <div>
      <div>
        <h1>Modal</h1>
        <button onClick={abrirModal} >Abrir Modal</button>
        <Modal
          className='Modal'
          overlayClassName='Overlay'
          isOpen={modalAberto}
        >
          <h1>Modal Aberto</h1>
          <button onClick={fecharModal}>Fechar Modal</button>
        </Modal>
      </div>
    </div>
  )
}