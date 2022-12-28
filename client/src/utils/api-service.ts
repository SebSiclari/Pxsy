import { Photos } from "../types/Photos";
import {TopicsUrls} from '../types/TopicUrls';

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

export const filterByTopic = (str: string, photoList:Photos[]) => {
  if (str) return photoList.filter((topic) => topic.topics.includes(str));
  else return photoList;
};

export const getUniqueTopics = async () => {
  const data = await getAllData();
  let topics: string[][] = [];

  data.forEach((topic: Photos) => {
    topics.push(topic.topics);
  });

  const res: string[] = [];
  const flattenArray = topics.flat();

  flattenArray.forEach((topic) => {
    if (res.indexOf(topic) === -1) {
      res.push(topic);
    }
  });

  return res
};



export const getDesiredFormat = async () => {
  const data = await getAllData();
  const result: TopicsUrls[] = [];

  data.forEach((topic: Photos) => {
    const topics = topic.topics;
    const urls = topic.url;
    const ids = topic.id;
    for (let i = 0; i < topics.length; i++) {
      result.push({ topics: topics[i], url: urls, id:ids });
    }
  });
  return result.sort().reverse()
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
