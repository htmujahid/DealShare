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
