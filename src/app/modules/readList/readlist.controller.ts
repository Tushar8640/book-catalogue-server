import {Request, Response} from "express";
import httpStatus from "http-status";
import {addReadListService, getAllReadListService, updateReadListService} from "./readlist.service";
import {IReadList} from "./readlist.interface";
import { sendResponse } from "../../../shared/sendResponse";
import { catchAsync } from "../../../shared/catchAsync";

export const createReadList = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;

  const result = await addReadListService(data);
  sendResponse<IReadList>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Read list created successfully!",
    data: result,
  });
});
//get all lists
export const getAllReadList = catchAsync(async (req: Request, res: Response) => {
  const lists = await getAllReadListService();
  sendResponse<IReadList[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Read Lists retrieved successfully!",
    data: lists,
  });
});
//update list
export const updateReadList = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req?.body;
  const result = await updateReadListService(id, updatedData);
  sendResponse<IReadList>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Read List updated successfully!",
    data: result,
  });
});
