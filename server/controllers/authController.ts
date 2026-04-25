import { RequestHandler } from "express";
import { prisma } from "../lib/prisma.js";
import { User } from "../generated/prisma/browser.js";
import bcrypt from "bcrypt";
import { signToken } from "../lib/jwt.js";
import ApiError from "../config/ApiError.js";
import getErrorMessage from "../utils/getErrorMessage.js";

export const register: RequestHandler = async (req, res, next) => {
  try {
    const { email, name, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);

    const user: User = await prisma.user.create({
      data: {
        email: email,
        name: name,
        password: passwordHash,
      },
    });

    const token = signToken(user.id);
    res.send(201).json({ token });
  } catch (error) {
    next(new ApiError(500, getErrorMessage(error)));
  }
};

export const login: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUniqueOrThrow({
      where: {
        email: email,
      },
    });

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return next(new ApiError(401, `Invalid credentials`));
    }

    const token = signToken(user.id);
    res.send(200).json({ token });
  } catch (error) {
    next(new ApiError(500, getErrorMessage(error)));
  }
};

export const getMe: RequestHandler = (req, res, next) => {
  const user = req.user;
  if (!user) return new ApiError(401, "Unauthorized");

  res.send(200).json(user);
};
