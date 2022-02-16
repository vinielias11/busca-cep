import React, { useState } from 'react';
import './App.css';
import ContainerInput from './components/ContainerInput/ContainerInput';
import ContainerInfo from './components/ContainerInfo/ContainerInfo';

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
    <div className='container'>
      <ContainerInput 
        onClick={onClickPesquisar} 
        onChange={onChangeInput}
        valor={input} 
      />
      <ContainerInfo response={response}/>
    </div>
  );
}

export default App;
