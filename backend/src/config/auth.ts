import dotenv from "dotenv";

dotenv.config();

export const auth = {
  host: process.env.AUTH_HOST,
  user: process.env.AUTH_USER,
  pass: process.env.AUTH_PASS,
};
