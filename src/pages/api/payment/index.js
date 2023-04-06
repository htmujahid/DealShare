import { database } from "@/lib/api/middleware";
import { ncRouteHandlerOpts } from "@/lib/api/nc";
import safepayInit, { safepay } from "@/lib/api/middleware/safepayInit";
import { createRouter } from "next-connect";

const router = createRouter();

router.use(database, safepayInit);

router.post(async (req, res) => {
  try {
    const { token } = await safepay.payments.create({
      amount: parseInt(req.body.amount),
      currency: "USD",
    });

    const url = safepay.checkout.create({
      token,
      orderId: "T800",
      cancelUrl: "http://example.com/cancel",
      redirectUrl: "http://example.com/success",
      source: "custom",
      webhooks: true,
    });

    res.json(url);
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

export default router.handler(ncRouteHandlerOpts);
