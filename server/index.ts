import express from "express";
import "dotenv/config";
import passport from "./config/passport.js";
import errorHandler from "./middleware/errorHandler.js";
import notFoundHandler from "./middleware/notFoundHandler.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
