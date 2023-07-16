import { Model, Types } from "mongoose";
import { IUser } from "../user/user.interface";

export type Review = {
  id: Types.ObjectId | IUser;
  review: string;
};
export type IBook = {
  title: string;
  author: string;
  genre: string;
  publicationYear: string;
  description?: string;
  reviews: Review[];
  image?: string;
};

export type IBookFilters = {
  searchTerm?: string;
  location?: string;
};

export type BookModel = Model<IBook, Record<string, unknown>>;
