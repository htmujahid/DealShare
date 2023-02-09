import { getProductQuestions } from "@/lib/api/db/questions";
import { database } from "@/lib/api/middleware";
import { ncRouteHandlerOpts } from "@/lib/api/nc";
import { createRouter } from "next-connect";

const router = createRouter();

router.use(database);

//get product questions
router.get(async (req, res) => {
  try {
    const questions = await getProductQuestions(req.query.productId);
    return res.status(200).json(questions);
  } catch (e) {
    return res.status(500).end();
  }
});

export default router.handler(ncRouteHandlerOpts);
