// @ts-ignore
//@ts-nocheck
import React from "react";
import styled from "styled-components";
import { getUniqueTopicsAndUrls } from "../../utils/api-service";
import { TopicItem } from "./TopicItem";
import { useEffect } from "react";
import { Suspense } from "react";
import { LoadingIndicator } from "../common/LoadingIndicator";
import { TopicsUrls } from "../../types/TopicUrls";
import { SideMenu } from "./SideMenu";
import { SearchMenu } from "./SearchMenu";
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
  gap: 5px 5px;
  text-align: center;
`;

interface HomeScreenProps{
  setSelectedTopic:(value:string) => void;
}

export const HomeScreen = ({setSelectedTopic}:HomeScreenProps) => {
  const [header, setHeader] = React.useState("");
  const [input, setInput] = React.useState<string>("");
  const [topics, setTopics] = React.useState<TopicsUrls[]>([]);

  useEffect(() => {
    getUniqueTopicsAndUrls()
      .then((response) => setTopics(response))
      .catch((e) => console.log(e));
  }, []);

  console.log("this is topics", topics);

  return (
    <StyledMain>
      <SideMenu />
      <Suspense fallback={<LoadingIndicator />}>
        <PhotoContainer>
          <SearchMenu
            input={input}
            setInput={setInput}
            active={header}
            setHeader={setHeader}
          />
          <Root>
            {topics && input
              ? topics.map((item, i) => {
                  if (
                    item.topics?.toLowerCase().includes(input?.toLowerCase())
                  ) {
                    return (
                      <TopicItem
                        key={i}
                        topic={item.topics}
                        image={item.url}
                        id={item.id}
                        setSelectedTopic={setSelectedTopic}
                      />
                    );
                  }
                })
              : topics &&
                topics.map((item, i) => {
                  return (
                    <TopicItem
                      key={i}
                      topic={item.topics}
                      image={item.url}
                      id={item.id}
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
