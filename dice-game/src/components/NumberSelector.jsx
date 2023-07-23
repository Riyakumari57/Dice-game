
import styled from "styled-components"

function NumberSelector({selectNum , setSelectNum}) {
  
    const arr  = [ 1 , 2 , 3 , 4 , 5 , 6];
  
     console.log(selectNum);
   
  return (
    <>
    <NumberSelectorContainer>
      <div className="flex">
      {
        arr.map((value,i)=>(
            <Box 
                isSelected = {value === selectNum}
            key={i} 
            onClick={()=>
              setSelectNum(value)
            }>{value}</Box>
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
  .flex{
    display:flex;
    gap: 24px;
  }
  p{
     font-size: 24px;
     font-weight: 700px;
     
  }
`;


const Box = styled.div`

background: #FFF;

width: 72px;
height: 72px;
border: 1px solid #000;
display: grid;
place-items:center ;
font-size: 24px;
font-weight: 700;
background-color: ${(props)=>props.isSelected ? "black" : "white"};
color: ${(props)=>!props.isSelected ? "black" : "white"};
`;