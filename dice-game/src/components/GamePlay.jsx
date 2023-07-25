import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { useState } from "react";
import Rules from "./Rules";

function GamePlay() {
  const [score, setScore] = useState(0);
  const [selectNum, setSelectNum] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules , setShowRules] = useState(false)

  const generateRandomNumber = (min, max) => {
    // console.log(Math.floor(Math.random()  * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const resetScore = () => {
    setScore(0);
  };
  const rollDice = () => {
    if (!selectNum) {
      setError("You have not selected any number");
      return;
    }
    setError("");
    const RandomNum = generateRandomNumber(1, 7);
    setCurrentDice((prev) => RandomNum);

    if (selectNum === RandomNum) {
      setScore((prev) => prev + RandomNum);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectNum(undefined);
  };

  return (
    <>
      <MainContainer>
        <div className="container">
          <TotalScore score={score}></TotalScore>
          <NumberSelector
            setError={setError}
            error={error}
            selectNum={selectNum}
            setSelectNum={setSelectNum}
          ></NumberSelector>
        </div>
        <RollDice currentDice={currentDice} rollDice={rollDice}></RollDice>

        <div className="btns">
          <Buttonreset onClick={resetScore}>Reset</Buttonreset>
          <ButtonRules
          onClick={()=>setShowRules((prev)=>!prev)}
          >{showRules ? "Hide " : "Show "}
          Rules</ButtonRules>
        </div>
       {showRules ? <Rules /> : ""} 
      </MainContainer>
    </>
  );
}

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 30px;
  .container {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
  }
`;

const ButtonControl = styled.button`
  padding: 7px 14px;
  background: transparent;
  border-radius: 5px;
  color: black;
  width: 180px;
  border: 1px solid #000;
  font-size: 18px;
  transition: 0.3s;
  cursor: pointer;
  overflow: hidden;
`;

const Buttonreset = styled(ButtonControl)`
  padding: 7px 14px;
  background: transparent;
  border-radius: 5px;
  color: black;
  width: 180px;
  border: 1px solid #000;
  font-size: 18px;
  transition: 0.3s;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    background-color: black;
    color: white;
    transition: 0.3s background ease-in;
  }
`;

const ButtonRules = styled(ButtonControl)`
  padding: 7px 14px;
  background: black;
  border-radius: 5px;
  color: white;
  width: 180px;
  border: 1px solid #000;
  font-size: 18px;
  transition: 0.3s;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    background-color: white;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
