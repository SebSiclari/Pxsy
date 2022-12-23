import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
`
export const ErrorBoundary = () => {
  return (
    <Root>
    <img alt='loading' src={'<iframe src="https://giphy.com/embed/8L0Pky6C83SzkzU55a" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mini-italia-8L0Pky6C83SzkzU55a">via GIPHY</a></p>'}/>
  </Root>
  )
}
