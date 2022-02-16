import React from 'react';
import './ContainerInfo.css'

const ContainerCep = ({ response }) => {
  return (
    <div className='container-info'>
      <span>{response.bairro}</span>
      <span>{response.cep}</span>
      <span>{response.complemento}</span>
      <span>{response.ddd}</span>
      <span>{response.localidade}</span>
      <span>{response.logradouro}</span>
    </div>
  );
};

export default ContainerCep;