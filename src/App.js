import React, { useState } from 'react';
import './App.css';
import ContainerInput from './components/ContainerInput/ContainerInput';
import ContainerInfo from './components/ContainerInfo/ContainerInfo';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState(null);

  const onClickPesquisar = async () => {
    if (!validaCepValido(input)) {
      alert('Informe um CEP válido!');
    }
    
    const dados = await fetch(`https://viacep.com.br/ws/${input}/json/`).then(resp => resp.json());
    
    setResponse(dados);
    setInput('');
  }

  const validaCepValido = (cep) => {
    if (cep === '' || cep.length > 8 || cep.length < 8) {
      return false;
    }
    
    return true;
  }

  return (
    <div className='container'>
      <h1 className='titulo'>Consulta de CEP</h1>
      <ContainerInput 
        onClick={onClickPesquisar} 
        onChange={(e) => setInput(e.target.value)}
        valor={input} 
      />
      <ContainerInfo response={response}/>
    </div>
  );
}

export default App;
