import { fetcher } from "../fetch";

export async function registerUser(data) {
  return await fetcher("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}
