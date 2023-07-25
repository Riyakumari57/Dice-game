import styled from "styled-components"

function StartGame({ toggle }) {
  return (
    <>
      <Container>
        <div>
          <img src="/images/dices.png" alt="" />
        </div>

        <div className="content">
          <h1>DICE GAME</h1>
          <Button
            onClick={toggle}
          ><span></span>Play Now </Button>
        </div>
      </Container>
    </>
  )
}

export default StartGame

const Container = styled.div`
max-width: 1180px;
display: flex;
justify-content: center;
align-items: center;
margin: auto;
height: 100vh;
 img{
  width: 389px;
height: 342px;
 }
.content {
   h1{
    font-size: 76px;
    white-space: nowrap;
   }
}
`;


const Button = styled.button`
position: relative;
padding: 10px 18px;
background: transparent;
border-radius: 5px;
color: black;
min-width: 220px;
border: none;
font-size: 25px;
transition: 0.3s;
cursor: pointer;
overflow: hidden;

span{
  background: black;
  height: 100%;
  width: 22%;
  border-radius: 40px;
  position: absolute;
  left: 0;
  bottom: 0;
  transition: all 0.5s ease;
  z-index: -1;
}

&:hover{
  color: white;
}
&:hover span{
  width: 100%;
  border-radius:20px ;
}
`;