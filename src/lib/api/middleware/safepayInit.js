import { Safepay } from "@sfpy/node-sdk";

export let safepay;

async function initializeSafePay() {
  safepay = new Safepay({
    environment: "sandbox",
    apiKey: process.env.SAFEPAY_API_KEY,
    v1Secret: process.env.SAFEPAY_SECRET,
    webhookSecret: process.env.SAFEPAY_WEBHOOKS_SECRET,
  });
}

export default async function safepayInit(req, res, next) {
  if (!safepay) await initializeSafePay();
  return await next();
}
