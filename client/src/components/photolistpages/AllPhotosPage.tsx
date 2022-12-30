
import React from 'react'
import styled from 'styled-components'
import { usePhotos } from '../../hooks/usePhotos';
import { filterByTopic } from '../../utils/api-service';
import {Image} from './Image'
import { Button } from './Button';

const PhotoListWrapper = styled.div `
display:flex;
flex-direction:column;
align-items:center;
`
const Header = styled.div`
display:flex;
justify-content:center;
align-items:center;
border:none;
color: rgb(0, 138, 171);
text-transform: uppercase;
letter-spacing: 0.25em;
font-weight: 600;
height: 3rem;
`
const RootPhotos = styled.div`
margin-top: 3rem;
display: grid;
gap: 5px 5px;
text-align: center;
height: 80vh;
width: 100vw;
grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
overflow-y:scroll;
`;

const ButtonWrapper = styled.div`
position:fixed;
left:0;
right:0;
display:flex;
align-items: center;
justify-content:center;
bottom: 1rem;
width:100%;
z-index:2;
`

export const AllPhotosPage = () => {

  const {photos} = usePhotos()

  return (
    <>
    <PhotoListWrapper>
    <Header>{'ALL IMAGES'}</Header>
    <RootPhotos>
    {filterByTopic('', photos).map((item) => {
      return (
        <Image key={item.url} url={item.url} description={item.description} />
      );
    })}
  </RootPhotos>
  <ButtonWrapper>
  <Button></Button>
  </ButtonWrapper>
  </PhotoListWrapper>
</>
  )
}