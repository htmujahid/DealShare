import { fetcher } from "../fetch";

export async function getPaymentLink(data) {
  return await fetcher("/api/payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
