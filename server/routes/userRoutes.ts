import { Router } from "express";
import { updateUser } from "../controllers/userController.js";

const userRouter = Router();

userRouter.put("/update", updateUser);

export default userRouter;
