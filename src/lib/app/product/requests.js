import { fetcher } from "../fetch";

export async function addProduct(data) {
  return await fetcher("/api/manufacturer/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export async function updateProduct(productId, data) {
  return await fetcher(`/api/manufacturer/products/${productId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export async function deleteProduct(productId) {
  return await fetcher(`/api/manufacturer/products/${productId}`, {
    method: "DELETE",
  });
}

export async function deleteProductSudo(productId) {
  return await fetcher(`/api/admin/products/${productId}`, {
    method: "DELETE",
  });
}

export async function updateInventory(productId, data) {
  return await fetcher(`/api/manufacturer/products/${productId}/inventory`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}
