import { getUsersByRole } from "@/lib/api/db";
import { database } from "@/lib/api/middleware";
import { ncRouteHandlerOpts } from "@/lib/api/nc";
import { createRouter } from "next-connect";

const router = createRouter();

router.use(database);

router.get(async (req, res) => {
  try {
    const users = await getUsersByRole("customer");
    return res.status(200).json(users);
  } catch (e) {
    return res.status(500).end();
  }
});

export default router.handler(ncRouteHandlerOpts);
