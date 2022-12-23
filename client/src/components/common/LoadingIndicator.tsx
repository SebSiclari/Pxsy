import React from 'react'
import styled from 'styled-components';

const Root = styled.div`
`

export const LoadingIndicator = () => {
  return (
    <Root>
      <img alt='loading' src={'<iframe src="https://giphy.com/embed/xTkcEQACH24SMPxIQg" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/hand-bored-waiting-xTkcEQACH24SMPxIQg">via GIPHY</a></p>'}/>
    </Root>
  )
}
