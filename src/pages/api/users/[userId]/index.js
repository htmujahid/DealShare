import { editUser } from "@/lib/api/db";
import { database } from "@/lib/api/middleware";
import { ncRouteHandlerOpts } from "@/lib/api/nc";
import { createRouter } from "next-connect";

const router = createRouter();

router.use(database);

//Update a user
router.put(async (req, res) => {
  try {
    await editUser(req.query.userId, req.body);
    return res.status(200).end();
  } catch (e) {
    return res.status(500).json({ error: { message: e.message } });
  }
});

export default router.handler(ncRouteHandlerOpts);
