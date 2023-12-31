import { Schema, model } from "mongoose";
import { BookModel, IBook } from "./book.interface";

const BookSchema = new Schema<IBook, BookModel>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    publicationYear: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    reviews: [
      {
        id: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        review: {
          type: String,
        },
      },
    ],
    image: {
      type: String,
    },
    addedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

//create model
export const Book = model<IBook, BookModel>("Book", BookSchema);
