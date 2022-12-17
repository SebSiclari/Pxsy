import React from 'react'
import styled from 'styled-components'

const Root = styled.div`

`

interface ImageProps{
  url:string,
  id:string
}

export const Image = ({url, id}:ImageProps) => {
  return (
    <Root >
      <img src={url} height={200} width={250}/> <br/>
      <p>{id}</p>
      </Root>
  )
}
