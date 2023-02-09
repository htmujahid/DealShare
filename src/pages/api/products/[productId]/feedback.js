import { getProductFeedbacks } from "@/lib/api/db";
import { database } from "@/lib/api/middleware";
import { ncRouteHandlerOpts } from "@/lib/api/nc";
import { createRouter } from "next-connect";

const router = createRouter();

router.use(database);

//get product feedbacks
router.get(async (req, res) => {
  try {
    const feedbacks = await getProductFeedbacks(req.query.productId);
    return res.status(200).json(feedbacks);
  } catch (e) {
    return res.status(500).end();
  }
});

export default router.handler(ncRouteHandlerOpts);
