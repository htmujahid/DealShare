import { completeOrder, inProgressOrder } from "@/lib/api/db";
import {
  database,
  roleAuthorization,
  tokenChecker,
} from "@/lib/api/middleware";
import { ncRouteHandlerOpts } from "@/lib/api/nc";
import { createRouter } from "next-connect";

const router = createRouter();

router.use(database, tokenChecker, roleAuthorization(["manufacturer"]));

router.patch(async (req, res) => {
  const { status } = JSON.parse(req.body);
  try {
    let order;
    if (status === "in progress") {
      order = await completeOrder(req.query.orderId);
    } else if (status === "completed") {
      order = await inProgressOrder(req.query.orderId);
    }

    return res.status(200).json(order);
  } catch (e) {
    return res.status(500).end();
  }
});

export default router.handler(ncRouteHandlerOpts);
