import { fetcher } from "../fetch";

export async function completeOrder(orderId, data) {
  return fetcher(`/api/manufacturer/orders/${orderId}/complete`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
}
