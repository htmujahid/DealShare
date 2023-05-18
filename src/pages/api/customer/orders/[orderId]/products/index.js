import { getCustomerOrders, getCustomerProductsStatus } from "@/lib/api/db";
import {
  database,
  roleAuthorization,
  tokenChecker,
} from "@/lib/api/middleware";
import { ncRouteHandlerOpts } from "@/lib/api/nc";
import { createRouter } from "next-connect";

const router = createRouter();

router.use(database, tokenChecker, roleAuthorization(["customer"]));

//get orders
router.get(async (req, res) => {
  try {
    const products = await getCustomerProductsStatus(req.query.orderId);
    return res.status(200).json(products);
  } catch (e) {
    return res.status(500).end();
  }
});

export default router.handler(ncRouteHandlerOpts);
