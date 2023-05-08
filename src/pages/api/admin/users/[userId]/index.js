import { deleteUser } from "@/lib/api/db";
import {
  database,
  roleAuthorization,
  tokenChecker,
} from "@/lib/api/middleware";
import { ncRouteHandlerOpts } from "@/lib/api/nc";
import { createRouter } from "next-connect";

const router = createRouter();

router.use(database, tokenChecker, roleAuthorization(["admin"]));

router.delete(async (req, res) => {
  try {
    const user = await deleteUser(req.query.userId);
    return res.status(200).json(user);
  } catch (e) {
    return res.status(500).end();
  }
});

export default router.handler(ncRouteHandlerOpts);
