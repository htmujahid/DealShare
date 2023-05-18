import { getManufacturerOrderDetails } from "@/lib/api/db";
import {
  database,
  roleAuthorization,
  tokenChecker,
} from "@/lib/api/middleware";
import { ncRouteHandlerOpts } from "@/lib/api/nc";
import { createRouter } from "next-connect";

const router = createRouter();

router.use(database, tokenChecker, roleAuthorization(["manufacturer"]));

router.get(async (req, res) => {
  try {
    const orderDetails = await getManufacturerOrderDetails(
      req.query.orderId,
      req.user._id
    );
    return res.status(200).json(orderDetails);
  } catch (e) {
    return res.status(500).end();
  }
});

export default router.handler(ncRouteHandlerOpts);
