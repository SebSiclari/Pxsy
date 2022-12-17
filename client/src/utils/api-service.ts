import { PhotosData } from "../types/photosAPI";


export const getAllData = async():Promise<PhotosData> =>{

  const response = await fetch('https://static.pixsy.io/sample/photos.json');
  const data = await response.json();
  return data;
}