import React from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'

interface StyledLiProps {
  option:string;
  src:string;
  setOption:(value:string) => void;
  active:boolean;
}

interface RootProps {
  active:boolean;
}

const StyledList = styled.li`
cursor:pointer;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:${(props:RootProps)=>(props.active ? "rgb(0, 138, 171);": "#999999")}
`
const ImageContainer= styled.div`
cursor:pointer;
height: 2rem;
width: 2rem;
`
const Image = styled.img`
width:100%;
height:100%;
object-fit:contain;
`

export const StyledLi = ({option, src, active, setOption}:StyledLiProps) => {

  const navigate = useNavigate()
  const onClick = (e:any) => {
    e.preventDefault();
    if(e.target.innerText === 'IMAGES'){
      navigate('/all')
    }
    else setOption(e.target.innerText);
  }

  return (
    <StyledList active={active} onClick={(e) => onClick(e)}>
      <ImageContainer  >
      <Image src={src}/>
      </ImageContainer>
      <p>{option}</p>
    </StyledList>
  )
}
