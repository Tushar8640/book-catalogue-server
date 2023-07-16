import httpStatus from "http-status";

import {IReadList} from "./readlist.interface";
import {ReadList} from "./readlist.model";
import { ApiError } from "../../../handleErrors/ApiError";

//add wishlist
export const addReadListService = async (payload: IReadList) => {
  const newList = await ReadList.create(payload);
  if (!newList) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create list!");
  }
  return newList;
};
//get all lists
export const getAllReadListService = async (): Promise<IReadList[]> => {
  const lists = await ReadList.find({}).populate("user").populate("book");
  return lists;
};
//update list
export const updateReadListService = async (id: string, payload: Partial<IReadList>): Promise<IReadList | null> => {
  const isExist = await ReadList.findById({_id: id});
  if (!isExist) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Read List not found!");
  }
console.log(payload);
  const result = await ReadList.findOneAndUpdate({_id: id}, payload, {
    new: true,
  });
  return result;
};
