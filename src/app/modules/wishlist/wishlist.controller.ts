import {Request, Response} from "express";
import {catchAsync} from "../../../../../src/shared/catchAsync";
import {addWishListService, getAllWishListService} from "./wishlist.service";
import {sendResponse} from "../../../../../src/shared/sendResponse";
import {IWishList} from "./wishlist.interface";
import httpStatus from "http-status";

export const createWishList = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;

  const result = await addWishListService(data);
  sendResponse<IWishList>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Wish list created successfully!",
    data: result,
  });
});
//get all lists
export const getAllWishList = catchAsync(async (req: Request, res: Response) => {
  const lists = await getAllWishListService();
  sendResponse<IWishList[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Wish Lists retrieved successfully!",
    data: lists,
  });
});
