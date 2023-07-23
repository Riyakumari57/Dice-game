import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RollDice from "./RollDice"
import { useState } from "react"

function GamePlay() {

  const [score , setScore] = useState(0);
  const [selectNum , setSelectNum] = useState();
  const [currentDice ,setCurrentDice] = useState(1);


  const generateRandomNumber = (min ,max)=> {
    // console.log(Math.floor(Math.random()  * (max - min) + min));
      return Math.floor(Math.random()  * (max - min) + min);
  };

  const rollDice = ()=>{
    const RandomNum = generateRandomNumber(1,7);
    setCurrentDice((prev)=>RandomNum);
    
  if(!selectNum) return;

    if(selectNum === RandomNum)
    {
      setScore((prev)=>prev+RandomNum)
    }
    else{
      setScore((prev)=>prev-2);
    }
    setSelectNum(undefined);
  };

 
  return (
    <>
     
    <MainContainer>
      <div className="container">
      <TotalScore score={score}></TotalScore>
        <NumberSelector
         selectNum ={selectNum} 
         setSelectNum={setSelectNum}
        ></NumberSelector>
      </div>
      <RollDice
      currentDice={currentDice}
      rollDice={rollDice}
      ></RollDice>
    </MainContainer>
    


    </>
  )
}

export default GamePlay

const MainContainer = styled.main`
padding-top:70px;
.container{
  display: flex;
 justify-content: space-around;
  align-items: end;
}

`;