import {Model, Types} from "mongoose";
import {IUser} from "../../../../../src/app/modules/user/user.interface";
import {IBook} from "../../../../../src/app/modules/book/book.interface";

export type IReadList = {
  user: Types.ObjectId | IUser;
  book: Types.ObjectId | IBook;
  status: "Reading" | "Plan to Read" | "Finished";
};

export type ReadListModel = Model<IReadList, Record<string, unknown>>;
