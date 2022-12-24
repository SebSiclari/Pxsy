import { useQuery } from "react-query";
import { Photos } from "../types/Photos";
import { getAllData } from "../utils/api-service";

const fetcher = async () => {
  try {
    const data = await getAllData();

    return data.map((photo: Photos) => ({
      id: photo.id,
      description: photo.description,
      url: photo.url,
      link: photo.link,
      topics: photo.topics,
      user: photo.user,
    }));
  } catch (e) {
    throw new Error("unable to fetch data");
  }
};

export const usePhotos = () => {
  const { isLoading, isError, data, error } = useQuery(
    ["photos"],
    () => fetcher(),
    {
      suspense: true,
    }
  );

  return {
    photos: data,
    isLoading,
    isError,
    error,
  };
};
