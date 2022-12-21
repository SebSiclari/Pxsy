import { Request, Response } from "express";
import axios from "axios";

export const getPhotos = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      "https://static.pixsy.io/sample/photos.json",
      { headers: { "Accept-Encoding": "gzip,deflate,compress" } }
    );
    res.send(response.data);
    res.status(200);
  } catch (e) {
    console.log(e);
  }
};
