import React from 'react'
import styled from 'styled-components';
import { usePhotos } from '../../hooks/usePhotos';
import {Image} from './Image'

const Root = styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(235px, .5fr));
gap:5px 0px;
height:100vh

`

export const HomeScreen = () => {

  const {photos} = usePhotos();

  return (
  <Root>
    {photos?.map((photo)=>{
      return <Image url={photo.url} id={photo.id} />
    })}
  </Root>
  )
}
