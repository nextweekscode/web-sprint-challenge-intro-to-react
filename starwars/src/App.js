import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Charactersplit from './components/Charactersplit'

const App = () => {

  const [character, setCharacter] = useState([])
 

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then((res) => {
      setCharacter(res.data.results)
      console.log(character)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
    

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Charactersplit character={character} />
    </div>
  );
}

export default App;
