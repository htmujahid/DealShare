import useSWR from "swr";
import { fetcher } from "../fetch";

export function useCustomers() {
  const { data, error } = useSWR("/api/customers", fetcher);

  return {
    customers: data,
    error,
    loading: !data && !error,
  };
}
