import React from "react";
import styled from "styled-components";

const StyledTopicItem = styled.div`
  height: 2.5rem;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  height:20vh;
`;

interface topicItemProps {
  topic: string;
  setSelectedTopic: (value: string) => void;
  pictures:string
}

export const TopicItem = ({ topic, setSelectedTopic, pictures }: topicItemProps) => {
  return (
    <StyledTopicItem
      onClick={(e: any) => {
        setSelectedTopic(e.target?.innerText);
      }}
    >
    <img src={pictures} alt={""} height={100} width={100}/>
      {topic}
    </StyledTopicItem>
  );
};
