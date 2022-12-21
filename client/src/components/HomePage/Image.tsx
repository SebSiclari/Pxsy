/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'

const Root = styled.div`

`

interface ImageProps{
  url:string,
  topics:string[]
}

export const Image = ({url, topics}:ImageProps) => {
  return (
    <Root >
      <img src={url} height={150} width={200}/> <br/>
      <p>{topics[0]}</p>
      </Root>
  )
}
