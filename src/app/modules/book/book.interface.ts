import { HydratedDocument, Model } from "mongoose";

export interface IBook {
  title: string;
  author: string[];
  genre: string;
  publicationYear: number;
  publisher: {
    name: string;
    location: string;
  };
  reviews: { user: string; comment: string }[];

  rating: number;
  price: number;
}

// statics
export interface IBookModel extends Model<IBook> {
  getBestSeller(): number[];
}
