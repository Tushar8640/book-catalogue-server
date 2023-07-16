import {Model, Types} from "mongoose";
import {IUser} from "../../../../../src/app/modules/user/user.interface";
import {IBook} from "../../../../../src/app/modules/book/book.interface";

export type IWishList = {
  user: Types.ObjectId | IUser;
  book: Types.ObjectId | IBook;
};

export type WishListModel = Model<IWishList, Record<string, unknown>>;
