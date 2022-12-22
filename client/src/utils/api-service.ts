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

interface TopicsUrls {
  topics: string;
  url: string;
}

export const getDesiredFormat = async () => {
  const data = await getAllData();
  const result: TopicsUrls[] = [];
  data.photos.forEach((topic: Photos) => {
    const topics = topic.topics;
    const urls = topic.url;
    for (let i = 0; i < topics.length; i++) {
      result.push({ topics: topics[i], url: urls });
    }
  });
  return result;
};

export const getUniqueTopicsAndUrls = async () => {
  const uniqueTopics = await getUniqueTopics();
  const objArrayOfTopicsAndUrls = await getDesiredFormat();
  const result:TopicsUrls[] = [];

  while(uniqueTopics.length){
  objArrayOfTopicsAndUrls.forEach((obj)=>{
    if(uniqueTopics[0] === obj.topics){
      result.push(obj);
      uniqueTopics.shift();
    }
  })
}
 return result
};
