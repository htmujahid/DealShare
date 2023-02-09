import { getToken } from "next-auth/jwt";

export default async function tokenChecker(req, res, next) {
  const token = await getToken({
    req,
    secret: process.env.SECRET,
  });
  if (!token) return res.status(401).end();
  const { email, sub: _id, firstName, lastName } = token;
  req.user = {
    _id,
    email,
    firstName,
    lastName,
  };
  return next();
}
