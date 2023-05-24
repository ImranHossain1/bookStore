import { NextFunction, Request, Response } from "express";
import {
  createBookToDB,
  getBestSellerServices,
  getBookByGenre,
  getBookByGenreAndPublisher,
  getBookFromDB,
  updateBookPriceService,
} from "./book.service";

export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const book = await createBookToDB(data);
  res.status(200).json({
    status: "success",
    data: book,
  });
};

export const getBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const books = await getBookFromDB();
  res.status(200).json({
    status: "success",
    data: books,
  });
};
export const getBooksByGenre = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const genre = req.query.genre;
  const user = await getBookByGenre(genre);
  res.status(200).json({
    status: "success",
    data: user,
  });
};
export const getBooksByGenreAndPublisherController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const genre: string = req.query.genre;
  const publisher: {
    name: string;
    location: string;
  } = req.query.publisher;
  const user = await getBookByGenreAndPublisher(genre, publisher);
  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getBestSellerController = async (req: Request, res: Response) => {
  const bookSeller = await getBestSellerServices();
  res.status(200).json({
    status: "success",
    data: bookSeller,
  });
};
////////////////

export const updatePriceTypeController = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await updateBookPriceService();

    res.status(200).json({
      stauts: "success",
      message: "Successfully updated the product",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Couldn't update the product",
      error: error.message,
    });
  }
};
