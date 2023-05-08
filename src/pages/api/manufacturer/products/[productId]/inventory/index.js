import {
  addProduct,
  getProduct,
  getProductsByManufacturer,
  updateInventory,
} from "@/lib/api/db";
import {
  database,
  roleAuthorization,
  tokenChecker,
} from "@/lib/api/middleware";
import { ncRouteHandlerOpts } from "@/lib/api/nc";
import { createRouter } from "next-connect";

const router = createRouter();

router.use(database, tokenChecker, roleAuthorization(["manufacturer"]));

//get products
router.put(async (req, res) => {
  const { productId } = req.query;
  const { user } = req;

  try {
    const product = await getProduct(productId);

    if (!product || product.manufacturerId !== user._id) {
      return res.status(404).json({
        error: "Product not found",
      });
    }

    const inventory = updateInventory(productId, req.body);

    return res.status(200).json(inventory);
  } catch (e) {
    return res.status(500).end();
  }
});

export default router.handler(ncRouteHandlerOpts);
