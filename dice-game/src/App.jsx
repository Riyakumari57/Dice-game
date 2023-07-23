import { useState } from 'react';
import StartGame from './components/StartGame';
import styled from 'styled-components';
import GamePlay from './components/GamePlay';


function App() {
 
const [isGameStarted, setGameStarted] = useState(true);

const toggleGamePlay = ()=>{
  setGameStarted(prev => !prev);
}
  return (
    <>

    {
        isGameStarted ? <GamePlay></GamePlay> : <StartGame toggle = {toggleGamePlay}></StartGame>
    }
      
    </>
  )
}

export default App


