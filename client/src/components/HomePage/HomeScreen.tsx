// @ts-ignore
//@ts-nocheck
import React from "react";
import styled from "styled-components";
import { usePhotos } from "../../hooks/usePhotos";
import { Image } from "./Image";
import { getUniqueTopics } from "../../utils/api-service";
import { TopicItem } from "./TopicItem";
import { useEffect } from "react";
import {picturePerTopic} from '../../utils/api-service';

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

export const HomeScreen = ({ input }: HomeScreenProps) => {
  const { photos } = usePhotos();

  const [topics, setTopics] = React.useState<string[]>([]);
  const [pictures, setPictures] = React.useState<string[]>([]);
  const [selectedTopic, setSelectedTopic] = React.useState("");

  const filterByTopic = (str: string, photoList: typeof photos) => {
    if (!str) return photoList;
    return photoList.filter((topic) => topic.topics.includes(str));
  };

  useEffect(() => {
    getUniqueTopics().then((response) => setTopics(response));
    picturePerTopic().then((response) => setPictures(response));
  }, []);

  console.log('this is pictures', pictures);

  return (
    <main>
      <Root>
        {topics.map((item) => {
          return (
            <TopicItem
              key={item}
              topic={item}
              picture={pictures}
              setSelectedTopic={setSelectedTopic}
            />
          );
        })}
      </Root>
      <RootPhotos>
        {filterByTopic(selectedTopic, photos).map((item) => {
          return <Image url={item.url} topics={item.topics} />;
        })}
      </RootPhotos>
    </main>
  );
};
