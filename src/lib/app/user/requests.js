import { fetcher } from "../fetch";

export async function registerUser(data) {
  return await fetcher("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export async function updateUser(id, data) {
  return await fetcher(`/api/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export async function updatePassword(data) {
  return await fetcher(`/api/users`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export async function deleteUser(id) {
  return await fetcher(`/api/admin/users/${id}`, {
    method: "DELETE",
  });
}

export async function verifyUser(id, data) {
  return await fetcher(`/api/admin/users/${id}/verify`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
}
