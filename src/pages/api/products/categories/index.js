import { getProductCategories } from "@/lib/api/db";
import { database } from "@/lib/api/middleware";
import { ncRouteHandlerOpts } from "@/lib/api/nc";
import { createRouter } from "next-connect";

const router = createRouter();

router.use(database);

//get products by category
router.get(async (req, res) => {
  try {
    const products = await getProductCategories();
    return res.status(200).json(products);
  } catch (e) {
    return res.status(500).end();
  }
});

export default router.handler(ncRouteHandlerOpts);
