
import React from "react";
import styled from "styled-components";
import {PhotoCount} from '../../types/PhotoCount'
import { getUniqueTopicsAndUrls } from "../../utils/api-service";
import { TopicItem } from './TopicItem';
import { useEffect } from "react";
import { Suspense } from "react";
import { LoadingIndicator } from "../common/LoadingIndicator";
import { SideMenu } from './sideMenu/SideMenu'
import { SearchMenu } from './searchMenu/SearchMenu'
const StyledMain = styled.main`
  display: flex;
`;
const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Root = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(235px, 0.5fr));
  gap: 1.5rem 2.5rem;
  text-align: center;
`;

interface HomeScreenProps{
  setSelectedTopic:(value:string) => void;
}

export const HomeScreen = ({setSelectedTopic}:HomeScreenProps) => {
  const [input, setInput] = React.useState<string>("");
  const [topics, setTopics] = React.useState<PhotoCount[]>([]);
  useEffect(() => {
    getUniqueTopicsAndUrls()
      .then((response) => setTopics(response))
      .catch((e) => console.log(e));
  }, []);

  console.log('this is topics', topics);

  return (
    <StyledMain>
      <SideMenu />
      <Suspense fallback={<LoadingIndicator />}>
        <PhotoContainer>
          <SearchMenu
            input={input}
            setInput={setInput}
          />
          <Root>
            {topics && input
              ? topics.map((item, i) => {
                  if (
                    item.topic?.toLowerCase().includes(input?.toLowerCase())
                  ) {
                    return (
                      <TopicItem
                        key={i}
                        topic={item.topic}
                        image={item.url}
                        matches={item.count}
                        setSelectedTopic={setSelectedTopic}
                      />
                    );
                  }
                })
              : topics &&
                topics.map((item,i) => {
                  return (
                    <TopicItem
                      key={i}
                      topic={item.topic}
                      image={item.url}
                      matches={item.count}
                      setSelectedTopic={setSelectedTopic}
                    />
                  );
                })}
          </Root>
        </PhotoContainer>
      </Suspense>
    </StyledMain>
  );
};
