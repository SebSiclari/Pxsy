
import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
display:flex;
flex-direction:column;
align-items:center;
height: 19rem
`


const StyledDescription = styled.p`
font-family:canada-type-gibson,'Helvetica','Arial',sans-serif;
color:#666;
font-size:11px;
`

interface ImageProps{
  url:string;
  description:string|null;
}

export const Image = ({url,description}:ImageProps) => {
  return (
    <Root >
      <img src={url} height={200} width={250}/>
      <StyledDescription>{description!==null ? description[0].toUpperCase() + description.slice(1) : 'Some pictures are worth a thousand words.'}</StyledDescription>
      </Root>
  )
}
