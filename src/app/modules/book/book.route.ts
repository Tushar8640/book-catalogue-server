import express from "express";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getSingleBook,
  updateBook,
} from "./book.controller";
import { auth } from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";

const router = express.Router();
const document = "cow";
//,

router.post(
  "/",
  //  auth(document, ENUM_USER_ROLE.USER),
  createBook
);
router.get(
  "/:id",
  //   auth(document,ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  getSingleBook
);
router.delete(
  "/:id",
  //  auth(document, ENUM_USER_ROLE.USER),
  deleteBook
);
router.patch("/:id", auth(document, ENUM_USER_ROLE.USER), updateBook);
router.get(
  "/",
  // auth(document, ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  getAllBooks
);
//
export const BookRoutes = router;
