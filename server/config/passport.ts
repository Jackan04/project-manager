import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { prisma } from "../lib/prisma.js";
import { JwtPayload } from "jsonwebtoken";
import { DoneCallback } from "passport";
import { StrategyOptionsWithSecret } from "passport-jwt";

const secret = process.env.JWT_SECRET;

if (!secret) {
  throw new Error("No jwt secret specified");
}

const options: StrategyOptionsWithSecret = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret,
};

passport.use(
  new JwtStrategy(options, async (payload: JwtPayload, done: DoneCallback) => {
    try {
      const user = await prisma.user.findUnique({
        where: { id: payload.sub },
        omit: { password: true },
      });

      if (!user) return done(null, false);

      return done(null, user);
    } catch (err) {
      return done(err, false);
    }
  }),
);

export default passport;
