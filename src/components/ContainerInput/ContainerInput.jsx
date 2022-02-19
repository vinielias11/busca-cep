import React from 'react'
import './ContainerInput.css'

const ContainerInput = ({ valor, onChange, onClick, onKeyPress }) => {
  return (
    <div className='container-input'>
      <input 
        className='cep-input'
        type="number"
        value={valor}
        placeholder="Digite um cep..."
        onChange={onChange}
        autoFocus={true}
        onKeyPress={onKeyPress}
      />
      <button className='botao-pesquisa' onClick={onClick}>Pesquisar</button>
    </div>
  );
};

export default ContainerInput;