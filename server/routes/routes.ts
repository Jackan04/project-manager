import { Router } from "express";
import authRouter from "./authRoutes.js";
import userRouter from "./userRoutes.js";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorize.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/user", authenticate, authorize, userRouter);

export default router;
