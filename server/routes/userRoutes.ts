import { Router } from "express";
import { updateUser, deleteUser } from "../controllers/userController.js";

const userRouter = Router();

userRouter.put("/update", updateUser);
userRouter.delete("/delete", deleteUser);

export default userRouter;
