import { Router } from "express";
import { login, register, getMe } from "../controllers/authController.js";
import { authenticate } from "../middleware/authenticate.js";

const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/me", authenticate, getMe);

export default authRouter;
