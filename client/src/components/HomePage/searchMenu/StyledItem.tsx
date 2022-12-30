import React from 'react'
import styled from 'styled-components';

interface RootProps {
  active:boolean;
}
interface StyledItemProps{
  item:string;
  setHeader:(value:string) => void;
  active:boolean;
}

const StyledLi = styled.li`
color: #999999;
font-size:16.8px;
font-family: canada-type-gibson;
color:${(props:RootProps)=>(props.active ? "rgb(0, 138, 171);": "#999999")}
`

export const StyledItem = ({item, setHeader, active}:StyledItemProps) => {

  async function handleClick(e:any){
    setHeader(e.target.innerText)
  }
  return (
    <StyledLi onClick={(e)=> handleClick(e)} active={active}>
      {item}</StyledLi>
  )
}
