import { addOrderPool } from "@/lib/api/controllers/order-controller";
import { getOrder, updateOrder } from "@/lib/api/db";
import { database } from "@/lib/api/middleware";
import { ncRouteHandlerOpts } from "@/lib/api/nc";
import { buffer } from "micro";
import { createRouter } from "next-connect";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: null,
  maxNetworkRetries: 10,
});

const router = createRouter();

router.use(database);

router.post(async (req, res) => {
  const buf = await buffer(req);
  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (e) {
    console.log(e);
    return res.status(400).send(`Webhook Error: ${e.message}`);
  }

  //Handle the webhook event
  if (event.type === "payment_intent.succeeded") {
    try {
      const paymentIntent = await stripe.paymentIntents.retrieve(
        event.data.object.id
      );

      if (paymentIntent) {
        const { orderId } = paymentIntent.metadata;

        if (!orderId) return res.status(404).end();

        await updateOrder(orderId, { paid: true });
        const order = getOrder(orderId);
        await addOrderPool(order);

        return res.end();
      }
    } catch (e) {
      console.error(e);
      return res.status(500).end();
    }
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default router.handler(ncRouteHandlerOpts);
