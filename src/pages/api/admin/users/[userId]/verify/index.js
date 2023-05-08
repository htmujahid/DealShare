import { editUser, unverifyUser, verifyUser } from "@/lib/api/db";
import {
  database,
  roleAuthorization,
  tokenChecker,
} from "@/lib/api/middleware";
import { ncRouteHandlerOpts } from "@/lib/api/nc";
import { createRouter } from "next-connect";

const router = createRouter();

router.use(database, tokenChecker, roleAuthorization(["admin"]));

router.patch(async (req, res) => {
  const { verified } = JSON.parse(req.body);
  try {
    let user;
    if (verified) {
      user = await unverifyUser(req.query.userId);
    } else {
      user = await verifyUser(req.query.userId);
    }

    return res.status(200).json(user);
  } catch (e) {
    return res.status(500).end();
  }
});

export default router.handler(ncRouteHandlerOpts);
