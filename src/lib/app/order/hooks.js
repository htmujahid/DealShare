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

export function useCustomerOrders() {
  const { data, error } = useSWR(`/api/customer/orders`, fetcher);

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

export function useManufacturerOrders() {
  const { data, error } = useSWR(`/api/manufacturer/orders`, fetcher);

  return {
    orders: data,
    error,
    loading: !data && !error,
  };
}

export function useOrderDetails(orderId) {
  const { data, error } = useSWR(`/api/admin/orders/${orderId}`, fetcher);

  return {
    orderDetails: data,
    error,
    loading: !data && !error,
  };
}

export function useManufacturerOrderDetails(orderId) {
  const { data, error } = useSWR(
    `/api/manufacturer/orders/${orderId}`,
    fetcher
  );

  return {
    orderDetails: data,
    error,
    loading: !data && !error,
  };
}
