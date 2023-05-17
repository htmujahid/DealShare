import { addOrder } from "@/lib/api/db";
import { addInvoice } from "@/lib/api/db/invoice";
import { database, tokenChecker } from "@/lib/api/middleware";
import { ncRouteHandlerOpts } from "@/lib/api/nc";
import { ObjectId } from "mongodb";
import { createRouter } from "next-connect";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: null,
  maxNetworkRetries: 10,
});

const router = createRouter();
router.use(tokenChecker, database);

router.post(async (req, res) => {
  try {
    const order = {
      paid: false,
      products: req.body.products.map((product) => new ObjectId(product._id)),
      userId: new ObjectId(req.user._id),
      createdAt: new Date(),
    };

    const orderId = await addOrder(order);
    const invoice = {
      orderId: new ObjectId(orderId),
      amount: req.body.amount,
      billingInfo: req.body.billingInfo,
      createdAt: new Date(),
    };

    await addInvoice(invoice);

    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: parseInt(req.body.amount * 100),
            product_data: {
              name: "Dealshare order",
              description: "Bought items",
            },
          },
        },
      ],
      mode: "payment",
      success_url: req.body.successUrl,
      cancel_url: req.body.cancelUrl,
      payment_intent_data: {
        metadata: {
          orderId: orderId.toString(),
        },
      },
    });
    return res.json(checkoutSession);
  } catch (e) {
    console.log(e);
    return res.status(500).end();
  }
});

export default router.handler(ncRouteHandlerOpts);
