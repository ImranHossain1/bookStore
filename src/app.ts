import express, { Application } from "express";
import cors from "cors";
const app: Application = express();

//Application routes
import bookRoutes from "./app/modules/book/book.route";
//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/v1/book", bookRoutes);
export default app;
