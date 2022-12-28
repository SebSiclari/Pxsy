import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Root = styled.div`
  justify-content:center
`;

interface StyleTopicItemProps {
  image: string;
}
const StyledTopicItem = styled.div<StyleTopicItemProps>`
  position: relative;
  height: 10rem;
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
  font-weight: 500;
  font-size: 11px;
`;

interface topicItemProps {
  topic: string;
  setSelectedTopic: (value: string) => void;
  image: string;
  id: string;
}

export const TopicItem = ({
  topic,
  setSelectedTopic,
  image,
  id,
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
        {topic}
      </Topic>
    </Root>
  );
};
