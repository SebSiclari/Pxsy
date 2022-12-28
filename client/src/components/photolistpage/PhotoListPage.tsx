import React from 'react'
import styled from 'styled-components'
import { usePhotos } from '../../hooks/usePhotos';
import { filterByTopic } from '../../utils/api-service';
import {Image} from './Image'

const PhotoListWrapper = styled.div `
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
`;

interface PhotoListPageProps{
  selectedTopic:string
}

export const PhotoListPage = ({selectedTopic}:PhotoListPageProps) => {

  const {photos} = usePhotos()

  return (
    <PhotoListWrapper>
    <Header>{selectedTopic.toUpperCase()}</Header>
    <RootPhotos>
    {filterByTopic(selectedTopic, photos).map((item) => {
      return (
        <Image key={item.url} url={item.url} topics={item.topics} />
      );
    })}
  </RootPhotos>
  </PhotoListWrapper>
  )
}
