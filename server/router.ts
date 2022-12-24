import { Router } from "express";
import { getPhotos, getById } from "./controller";
const router = Router();

router.get("/", getPhotos);
router.get('/:id', getById )

export default router;
