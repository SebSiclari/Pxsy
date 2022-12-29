import { Photos } from "../types/Photos";
import { TopicsUrls } from "../types/TopicUrls";
import { PhotoCount } from "../types/PhotoCount";

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

// FUNCTION USED TO FILTER PHOTOS BY TOPICS
export const filterByTopic = (str: string, photoList: Photos[]) => {
  if (str) return photoList.filter((topic) => topic.topics.includes(str));
  else return photoList;
};

// FUNCTION USED TO GET ALL 10 TOPICS INDIVIDUALLY FOR THE HOMESCREEN
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

  return res;
};

// FUNCTION USED TO TRANSFORM THE DATA IN THE DESIRED FROMAT WHICH WILL BE USED TO DISPLAY THE IMAGE AND TOPIC
// IN THE HOME PAGE
// EX. OUTPUT:[{topics:'architecture', url:'623grfbhf73u3ifh3h87th5uif', id:'dh74gr'}, etc.]
export const getDesiredFormat = async () => {
  const data = await getAllData();
  const result: TopicsUrls[] = [];

  data.forEach((topic: Photos) => {
    const topics = topic.topics;
    const urls = topic.url;
    for (let i = 0; i < topics.length; i++) {
      result.push({ topic: topics[i], url: urls});
    }
  });
  return result;
};

// FUNCTION THAT WILL BE USED TO DISPLAY INDIVIDUALLY THE TOPICS AND THE
// CORRESPONDING IMAGES PER TOPIC IN THE HOMESCREEN
export const getUniqueTopicsAndUrls = async () => {
  const objArrayOfTopicsAndUrls = await getDesiredFormat();
  const counts = new Map<string, PhotoCount>();

  for (const photo of objArrayOfTopicsAndUrls) {
    const { topic, url } = photo;
    if (!counts.has(topic)) {
      counts.set(topic, { topic, url, count: 1 });
    } else {
      const photoCount = counts.get(topic);
      if (photoCount) {
        photoCount.count += 1;
      }
    }
  }

  const result = Array.from(counts.values());

  return result;
};
