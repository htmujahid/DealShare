import useSWR from "swr";
import { fetcher } from "../fetch";

export function useCustomers() {
  const { data, error } = useSWR("/api/admin/customers", fetcher);

  return {
    customers: data,
    error,
    loading: !data && !error,
  };
}

export function useCustomerProductsStatus(orderId) {
  const { data, error } = useSWR(
    orderId ? `/api/customer/orders/${orderId}/products` : null,
    fetcher
  );

  return {
    products: data,
    error,
    loading: !data && !error,
  };
}
