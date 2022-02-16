import React from 'react'
import './ContainerInput.css'

const ContainerInput = ({ valor, onChange, onClick }) => {
  return (
    <div className='container-input'>
      <input 
        type="text"
        value={valor}
        placeholder="Digite um cep..."
        onChange={onChange}
      />
      <button onClick={onClick}>Pesquisar</button>
    </div>
  )
}

export default ContainerInput;