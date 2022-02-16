import React, { useState } from 'react';
import './App.css';
import ContainerInput from './components/ContainerInput/ContainerInput';
import ContainerCep from './components/ContainerCep/ContainerCep';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState({});

  const onClickPesquisar = async () => {
    if (input === '') return;

    const dados = await fetch(`https://viacep.com.br/ws/${input}/json/`).then(resp => resp.json());
    
    setResponse(dados);
    setInput('');
  }

  const onChangeInput = e => {
    setInput(e.target.value);
  }

  return (
    <>
      <ContainerInput 
        onClick={onClickPesquisar} 
        onChange={onChangeInput}
        valor={input} 
      />
      <ContainerCep response={response}/>
    </>
  );
}

export default App;
