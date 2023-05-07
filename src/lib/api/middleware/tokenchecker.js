import { getToken } from "next-auth/jwt";

export default async function tokenChecker(req, res, next) {
  const token = await getToken({
    req,
    secret: process.env.SECRET,
  });
  if (!token) return res.status(401).end();
  const { email, sub: _id, firstName, lastName, role } = token;
  req.user = {
    _id,
    email,
    firstName,
    lastName,
    role,
  };
  return next();
}

export function roleAuthorization(roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      return res.status(403).json({
        message: "You are not authorized to access this resource",
      });
    return next();
  };
}
