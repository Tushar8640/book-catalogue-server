import { Request, Response } from "express";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import httpStatus from "http-status";

import { paginationFields } from "../../../constant/pagination";
import { pick } from "../../../shared/pick";
import { IBook } from "./book.interface";
import {
  createBookService,
  deleteBookService,
  getAllBooksService,
  getSingleBookService,
  updateBookService,
} from "./book.service";
import { bookFilterableFields } from "./book.constant";
//create cow
export const createBook = catchAsync(async (req: Request, res: Response) => {
  const book = req.body;

  const newBook = await createBookService(book);
  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book created successfully!",
    data: newBook,
  });
});
//get all cows
export const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, bookFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);
  const cows = await getAllBooksService(filters, paginationOptions);
  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book retrieved successfully!",
    meta: cows.meta,
    data: cows.data,
  });
});
//get a single cow
export const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const book = await getSingleBookService(id);
  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "book retrieved successfully!",
    data: book,
  });
});
//update cow
export const updateBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req?.body;
  const updatedBook = await updateBookService(id, updatedData);
  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book updated successfully!",
    data: updatedBook,
  });
});
//delete cow
export const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const book = await deleteBookService(id);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book deleted successfully!",
    data: book,
  });
});
