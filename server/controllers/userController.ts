import { RequestHandler } from "express";
import ApiError from "../config/ApiError.js";
import { prisma } from "../lib/prisma.js";
import getErrorMessage from "../utils/getErrorMessage.js";

export const updateUser: RequestHandler<{ id: string }> = async (
  req,
  res,
  next,
) => {
  const { email, name, password } = req.body;

  try {
    const user = await prisma.user.update({
      where: { id: req.params.id },
      data: {
        email: email,
        name: name,
        password: password,
      },
    });

    if (!user) {
      return next(new ApiError(404, "User not found"));
    }

    res.send(200).json(user);
  } catch (error) {
    next(new ApiError(500, getErrorMessage(error)));
  }
};

export const deleteUser: RequestHandler<{ id: string }> = async (
  req,
  res,
  next,
) => {
  try {
    const user = await prisma.user.delete({
      where: { id: req.params.id },
    });

    if (!user) {
      return next(new ApiError(404, "User not found"));
    }

    res.send(200);
  } catch (error) {
    next(new ApiError(500, getErrorMessage(error)));
  }
};
