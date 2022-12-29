import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Root = styled.div`
  justify-content:center;
  align-items:center;
`;

interface StyleTopicItemProps {
  image: string;
}
const StyledTopicItem = styled.div<StyleTopicItemProps>`
  position: relative;
  height: 10rem;
  width: 15rem;
  background: var(--bg) center center / contain transparent;
  background-image: ${({ image }) => `url(${image})`};
  display: flex;
  aspect-ratio: 3 / 2;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`;

const Image = styled.img`
  display: block;
  height: 100%;
  width: 50%;
  object-fit: contain;
  backdrop-filter: blur(10px);
`;


const Topic = styled.div`
  bottom: 1px;
  font-weight: 600;
  font-size: 15px;
  display:flex;
  justify-content:center;
  margin-right:3.5rem;
  margin-top:.5rem;
`;

const Matches = styled.div`
  color:#999999
  bottom: 1px;
  font-weight: 200;
  font-size: 10px;
  display:flex;
  justify-content:center;
  margin-right:3.5rem;
`

interface topicItemProps {
  topic: string;
  setSelectedTopic: (value: string) => void;
  image: string;
  matches:number
}

export const TopicItem = ({
  topic,
  setSelectedTopic,
  image,
  matches
}: topicItemProps) => {

  const navigate = useNavigate();
  const handleClick = (e:React.MouseEvent) =>{
    setSelectedTopic(topic);
    navigate('/photo/list');
  }
  return (

    <Root
      id={topic}
      onClick={handleClick}
    >
      <StyledTopicItem image={image}>
        <Image alt={"topic"} src={image} /> <br />
      </StyledTopicItem>
      <Topic>
        {!topic.includes('-') ? topic[0].toUpperCase() + topic.slice(1): topic.split('-').map(item=> item[0].toUpperCase()+item.slice(1)).join('-')}
      </Topic>
      <Matches>
      {matches > 1 ? matches + ' matches': matches + ' match'}
      </Matches>
    </Root>
  );
};
