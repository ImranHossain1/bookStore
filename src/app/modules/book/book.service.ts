import { IBook } from "./book.interface";
import Book from "./book.model";

export const createBookToDB = async (payload: IBook): Promise<IBook> => {
  const book = new Book(payload);
  await book.save();
  return book;
};

export const getBookFromDB = async (): Promise<IBook[]> => {
  const books = await Book.find().select({ price: 1, publicationYear: 1 });
  return books;
};

export const getBookByGenre = async (
  payload: string
): Promise<IBook[] | null> => {
  const book = await Book.aggregate([{ $match: { genre: payload } }]);
  return book;
};
export const getBookByGenreAndPublisher = async (
  genre: string,
  publisher: {
    name: string;
    location: string;
  }
): Promise<IBook[] | null> => {
  const book = await Book.aggregate([
    {
      $match: {
        $and: [
          { genre: genre },
          { "publisher.name": publisher },
          // Add additional conditions if needed
        ],
      },
    },
  ]);
  return book;
};
export const getBestSellerServices = async (): Promise<number[]> => {
  const bestSeller = await Book.getBestSeller();
  return bestSeller;
};

export const updateBookPriceService = async (): Promise<IBook[]> => {
  const result = await Book.updateMany(
    { publicationYear: { $gt: 2020 }, price: { $type: "string" } },
    [{ $set: { price: { $toInt: "$price" } } }]
  );
  const updatedBooks = await Book.find({ publicationYear: { $gt: 2020 } });
  return updatedBooks;
};
