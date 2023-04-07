import { database } from "@/lib/api/middleware";
import { ncRouteHandlerOpts } from "@/lib/api/nc";
import { createRouter } from "next-connect";
import { getEstimatedTimeOfArrival } from "@/lib/api/controllers/order-controller";

const router = createRouter();

router.use(database);

router.post(async (req, res) => {
  try {
    const { product, order, manufacturer } = req.body;

    const estimatedTime = await getEstimatedTimeOfArrival(
      product,
      order,
      manufacturer
    );

    res.json({ estimatedTime });
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

export default router.handler(ncRouteHandlerOpts);
