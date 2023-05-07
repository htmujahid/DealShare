import useSWR from "swr";
import { fetcher } from "../fetch";

export function useOrders(limit) {
  const { data, error } = useSWR(`/api/orders?limit=${limit}`, fetcher);

  return {
    orders: data,
    error,
    loading: !data && !error,
  };
}

export function useAdminOrders() {
  const { data, error } = useSWR(`/api/admin/orders`, fetcher);

  return {
    orders: data,
    error,
    loading: !data && !error,
  };
}
