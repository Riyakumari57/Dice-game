
import styled from "styled-components"

function NumberSelector({selectNum , setSelectNum , error , setError}) {
  
    const arr  = [ 1 , 2 , 3 , 4 , 5 , 6];
  
     console.log(selectNum);
   
   const numberSelectorHandler = (value)=>{
    setSelectNum(value);
    setError("");
   }

  return (
    <>
    <NumberSelectorContainer>
      <p className="error" >{error}</p>
      <div className="flex">
      {
        arr.map((value,i)=>(
            <Box 
                isSelected = {value === selectNum}
            key={i} 
            onClick={()=>numberSelectorHandler(value)}>{value}</Box>
        ))
    }
      </div>
    <p>Select Number</p>
    </NumberSelectorContainer>
    
     
    </>
  )
}

export default NumberSelector


const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;

.error{
  color: red;
}
  .flex{
    display:flex;
    gap: 22px;
  }
  p{
     font-size: 19px;
     font-weight: 700;
     
  }

`;


const Box = styled.div`

background: #FFF;

width: 60px;
height: 60px;
border: 1px solid #000;
display: grid;
place-items:center ;
font-size: 20px;
font-weight: 700;
background-color: ${(props)=>props.isSelected ? "black" : "white"};
color: ${(props)=>!props.isSelected ? "black" : "white"};
`;