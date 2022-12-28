import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const StyledButton = styled.button`
cursor: pointer;
border: none;
background-color: rgb(0, 138, 171);
display: flex;
justify-content: center;
align-items: center;
padding: 8px 45px;
text-transform: uppercase;
letter-spacing: 0.25em;
font-weight: 600;
color: rgb(255, 255, 255);
`

export const Button = () => {

  const navigate = useNavigate();

  const handleClick = (e:React.MouseEvent) =>{
    e.preventDefault();
    navigate('/')
  }
  return (
    <StyledButton onClick={handleClick}>
      RETURN TO HOMEPAGE
    </StyledButton>
  )
}
