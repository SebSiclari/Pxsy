import { Photos } from "../types/Photos";

const BASE_URL = "http://localhost:3001";

export const getAllData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getUniqueTopics = async () => {
  const data = await getAllData();

  let topics: string[][] = [];

  data.photos.forEach((topic: Photos) => {
    topics.push(topic.topics);
  });

  const res: string[] = [];
  const flattenArray = topics.flat();

  flattenArray.forEach((topic) => {
    if (res.indexOf(topic) === -1) {
      res.push(topic);
    }
  });

  return res.sort();
};

export const picturePerTopic = async () => {
  const data = await getAllData();
  const TopicList = await getUniqueTopics();
  const res: string[] = [];

  while (TopicList.length) {
    data.photos.forEach((topic: Photos) => {
      if (topic.topics.indexOf(TopicList[0]) !== -1) {
        res.push(topic.url);
        TopicList.shift();
      }
    });
  }

  return res;
};
