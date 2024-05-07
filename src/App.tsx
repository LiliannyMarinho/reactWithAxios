import { useCallback, useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
import ig88 from './assets/gif-IG88.gif';

/*interface Advice{
  id: number;
  advice: string;
}
*/

function App() {

  //const [nome, setNome] = useState<String>();
  const [personagem, setPersonagem] = useState<any>();

  const getData = useCallback( async()=> {
    await axios.get('https://swapi.py4e.com/api/people/23/')
    .then(function (response) {
     console.log(response.data);
     setPersonagem(response.data);
    })
    .catch(function (error) {
      console.error(error);
    })
  }, [])

  useEffect(()=>{
    getData();
  }, [])
  /*
  const defName = (nome: string) => {
    setNome(nome);
  }
  */
  return (
    <div>
      <h1><strong>{personagem && personagem.name}</strong></h1>

      <img src = {ig88} width='500px'/>
      <p>"Eu penso, logo existo. Eu destruo, logo resisto."</p>
      <link to={'/test'}>Novo Teste</link>
    </div>
  )
}


export default App
