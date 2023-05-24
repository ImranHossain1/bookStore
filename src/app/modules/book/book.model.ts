import { Model, Schema, model } from "mongoose";
import { IBook, IBookModel } from "./book.interface";

//creating Schema using Interface
export const bookSchema = new Schema<IBook, IBookModel>({
  title: { type: String, required: true },
  author: { type: [String], required: true },
  genre: { type: String, required: true },
  publicationYear: { type: Number, required: true },
  publisher: {
    name: { type: String, required: true },
    location: { type: String, required: true },
  },
  reviews: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
    },
  ],
  rating: { type: Number, required: true },
  price: { type: Number, required: true },
});

bookSchema.static("getBestSeller", async function getBestSeller() {
  const bestSeller = await this.aggregate([
    { $match: { rating: { $gte: 4 } } },
    // add field stage
    {
      $addFields: {
        featured: {
          $cond: [{ $gte: ["$rating", 4.5] }, "BestSeller", "Popular"],
        },
      },
    },
    { $project: { rating: 1, title: 1, featured: 1 } },
  ]);
  return bestSeller;
});
const Book = model<IBook, IBookModel>("books", bookSchema);

export default Book;
