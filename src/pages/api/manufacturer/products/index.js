import { addProduct, getProductsByManufacturer } from "@/lib/api/db";
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
router.get(async (req, res) => {
  try {
    const products = await getProductsByManufacturer(req.user._id);
    return res.status(200).json(products);
  } catch (e) {
    return res.status(500).end();
  }
});

// post products
router.post(async (req, res) => {
  try {
    const product = await addProduct(req.body, req.user._id);
    return res.status(200).json(product);
  } catch (e) {
    return res.status(500).end();
  }
});

export default router.handler(ncRouteHandlerOpts);
