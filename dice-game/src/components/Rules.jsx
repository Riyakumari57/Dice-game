import styled from "styled-components";

function Rules() {
  return (
    <>
      <RulesContainer>
        <h2>How to play dice game</h2>
        <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p>if you get wrong guess then no points will be added  </p>
        </div>
        
      </RulesContainer>
    </>
  );
}

export default Rules;

const RulesContainer = styled.div`
  padding: 17px;
  gap: 20px;
  background: #fbf1f1;
  max-width: 730px;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 25px;
  border-radius: 10px;

  h2{
    font-size: 20px;
  }
  .text{
    font-size: 15px;
    font-weight: 500;
    margin-top: 24px;
  }
`;
