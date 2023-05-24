import express from "express";
import {
  createBook,
  getBestSellerController,
  getBooks,
  getBooksByGenre,
  getBooksByGenreAndPublisherController,
  updatePriceTypeController,
} from "./book.controller";

const router = express.Router();
router.get("/", getBooks);

// please uncomment the following code and use this route to watch:
// http://localhost:5000/api/v1/book/books?genre=Sci-Fi
// router.get("/books", getBooksByGenre);

// please uncomment the following code and use this route to watch:
//  http://localhost:5000/api/v1/book/books?genre=Sci-Fi&publisher=Roli Books
router.get("/books", getBooksByGenreAndPublisherController);

// find the best sellers
router.get("/bestSeller", getBestSellerController);
router.get("/", getBooks);

//update the price type, those are published after 2020
router.patch("/price-update", updatePriceTypeController);
router.post("/create-book", createBook);

export default router;
