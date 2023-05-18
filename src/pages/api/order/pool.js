import { database } from "@/lib/api/middleware";
import { ncRouteHandlerOpts } from "@/lib/api/nc";
import { createRouter } from "next-connect";
import { getOrder } from "@/lib/api/db";
import { addOrderPool } from "@/lib/api/controllers/order-controller";

const router = createRouter();

router.use(database);

router.post(async (req, res) => {
  try {
    const { orderId } = req.query;
    const order = await getOrder(orderId);
    await addOrderPool(order);
    res.json({ order });
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

export default router.handler(ncRouteHandlerOpts);
