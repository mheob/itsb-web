import bodyParser from "body-parser";
import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import { HttpError } from "./models/http-error";
import contactRoute from "./routes/contact";

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use((_: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "https://www.its-boehm.de");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  next();
});

app.use("/contact", contactRoute);

app.use((req: Request, res: Response, next: NextFunction) => {
  throw new HttpError("Could not find this route", 404);
});

app.use((error: HttpError, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

app.listen(process.env.PORT || 3991);
