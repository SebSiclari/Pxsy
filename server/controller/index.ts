import { Request, Response } from "express";
import axios from "axios";

export const getPhotos = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      "https://static.pixsy.io/sample/photos.json",
      { headers: { "Accept-Encoding": "gzip,deflate,compress" } }
    );
    const result = response.data.photos.filter(
      (photo: any) => !photo.url.includes('undefined')
    ).filter((photo:any)=> !photo.id.includes('-'))
    .filter((photo:any) => !photo.url.includes('images1'))

    res.send(result);
    res.status(200);
  } catch (e) {
    console.log(e);
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      "https://static.pixsy.io/sample/photos.json",
      { headers: { "Accept-Encoding": "gzip,deflate,compress" } }
    );
    const { id } = req.params;
    console.log("id is", id);
    console.log(response.data);
    const single = response.data.photos.find((item: any) => item.id == id);
    res.send(single);
    res.status(200);
  } catch (e) {
    console.log(e);
  }
};
