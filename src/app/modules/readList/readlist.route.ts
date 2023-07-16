import express from "express";
import {createReadList, getAllReadList, updateReadList} from "./readlist.controller";
const router = express.Router();
//

router.post("/", createReadList);
router.get("/", getAllReadList);
router.patch("/:id", updateReadList);
export const ReadListRoutes = router;
