import jwt, { SignOptions, Secret } from "jsonwebtoken";

export const signToken = (userId: number) => {
  const secret = process.env.JWT_SECRET;
  const expiresIn = process.env.JWT_EXPIRES_IN;

  if (!secret) {
    throw new Error("No jwt secret specified");
  }
  if (!expiresIn) {
    throw new Error("No jwt expiry specified");
  }

  return jwt.sign({ sub: userId }, secret as Secret, {
    expiresIn: expiresIn as SignOptions["expiresIn"],
  });
};
