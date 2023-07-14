import { Model } from "mongoose";

export type IBook = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews: number;
};

export type IBookFilters = {
  searchTerm?: string;
  location?: string;
};

export type BookModel = Model<IBook, Record<string, unknown>>;
