import express from "express";
import "dotenv/config";
import passport from "./config/passport.js";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());

app.get("/", (_req, res) => {
  res.json({ message: "Hello, world!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
