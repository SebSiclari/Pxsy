import { Router } from "express";
import { getPhotos } from "./controller";
const router = Router();

router.get("/", getPhotos);

export default router;
