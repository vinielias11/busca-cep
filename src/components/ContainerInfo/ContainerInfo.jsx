import React from 'react';
import './ContainerInfo.css'

const ContainerInfo = ({ response }) => {
  if (response) {
    return (
      <div className='container-info'>
        <span>Cidade: {response.localidade}</span>
        <span>Bairro: {response.bairro}</span>
        <span>Logradouro: {response.logradouro}</span>
        <span>Cep: {response.cep}</span>
        <span>Complemento: {response.complemento}</span>
        <span>DDD: {response.ddd}</span>
      </div>
    );
  };

  return (
    <div className='container-no-info'>
      <span>Informe um cep para receber as informações da API</span>
    </div>
  );

};

export default ContainerInfo;