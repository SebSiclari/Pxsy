import React from "react";
import styled from "styled-components";

const Root = styled.div`
align-text:center;
`
const StyledTopicItem = styled.div`
  position:relative;
  height: 3.5rem;
  background:var(--bg) center center / cover  transparent;
  display: flex;
  aspect-ratio: 3 / 2;
  align-items: center;
  cursor: pointer;
  height:20vh;
  justify-content:center
`;

const Image = styled.img`
display:block;
height:100%;
width:100%;
object-fit:contain;
backdrop-filter:blur(3px)`

const Topic = styled.div`
bottom:1px;
font-weight:500;
font-size:11px;
`


interface topicItemProps {
  topic: string;
  setSelectedTopic: (value: string) => void;
  image:string;
}

export const TopicItem = ({ topic, setSelectedTopic, image }: topicItemProps) => {
  return (
    <Root>
    <StyledTopicItem
    style={{background:`url(${image})`}}
      onClick={(e:any) => {
        setSelectedTopic(e.target?.innerText);
      }}
    >
      <Image alt={""} src={image} /> <br/>
    </StyledTopicItem>
    <Topic>{topic}</Topic>
    </Root>
  );
};
