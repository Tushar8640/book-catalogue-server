import express from "express";
import {
  addReview,
  createBook,
  deleteBook,
  getAllBooks,
  getSingleBook,
  updateBook,
} from "./book.controller";

const router = express.Router();

router.post(
  "/",
  //  auth(document, ENUM_USER_ROLE.USER),
  createBook
);
router.post(
  "/addReview/:id",
  //auth(document, ENUM_USER_ROLE.USER),
  addReview
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


router.patch(
  "/:id",
  //  auth(document, ENUM_USER_ROLE.USER),
  updateBook
);
router.get(
  "/",
  // auth(document, ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  getAllBooks
);
//

export const BookRoutes = router;
