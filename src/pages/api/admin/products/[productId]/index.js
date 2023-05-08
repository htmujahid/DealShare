import { deleteProduct, getProduct } from "@/lib/api/db/product";
import { database } from "@/lib/api/middleware";
import { ncRouteHandlerOpts } from "@/lib/api/nc";
import { createRouter } from "next-connect";

const router = createRouter();

router.use(database);

//get a product by its product ID
router.get(async (req, res) => {
  try {
    const product = await getProduct(req.query.productId);
    return res.status(200).json(product);
  } catch (e) {
    return res.status(500).end();
  }
});

router.delete(async (req, res) => {
  try {
    const product = await deleteProduct(req.query.productId);
    return res.status(200).json(product);
  } catch (e) {
    return res.status(500).end();
  }
});

export default router.handler(ncRouteHandlerOpts);
