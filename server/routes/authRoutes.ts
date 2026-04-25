import { Router } from "express";
import { login, register, getMe } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/me", getMe);

export default authRouter;
