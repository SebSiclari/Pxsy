// @ts-ignore
//@ts-nocheck
import React from "react";
import styled from "styled-components";
import { usePhotos } from "../../hooks/usePhotos";
import { Image } from "./Image";
import { getUniqueTopicsAndUrls } from "../../utils/api-service";
import { TopicItem } from "./TopicItem";
import { useEffect } from "react";
import { Suspense } from "react";
import { LoadingIndicator } from "../common/LoadingIndicator";
import { TopicsUrls } from "../../types/TopicUrls";
import { SideMenu } from "./SideMenu";

const StyledMain = styled.main`
  display: flex;
`;
const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(235px, 0.5fr));
  gap: 5px 5px;
  text-align: center;

`;

const RootPhotos = styled(Root)`
  height: 80vh;
  width: 100vw;
  margin-top: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
`;

interface HomeScreenProps {
  input: string;
}

export const HomeScreen = ({ input: HomeScreenProps }) => {
  const { photos } = usePhotos();

  const [topics, setTopics] = React.useState<TopicsUrls[]>([]);
  const [selectedTopic, setSelectedTopic] = React.useState("");

  const filterByTopic = (str: string, photoList: typeof photos) => {
    if (str) return photoList.filter((topic) => topic.topics.includes(str));
    else return photoList;
  };

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
          {/* <MenuBar/> */}
          <Root>
            {topics?.map((item) => {
              return (
                <TopicItem
                  key={item.id}
                  topic={item.topics}
                  image={item.url}
                  id={item.id}
                  setSelectedTopic={setSelectedTopic}
                />
              );
            })}
          </Root>

          <RootPhotos>
            {filterByTopic(selectedTopic, photos).map((item) => {
              return (
                <Image key={item.url} url={item.url} topics={item.topics} />
              );
            })}
          </RootPhotos>
        </PhotoContainer>
      </Suspense>
    </StyledMain>
  );
};
