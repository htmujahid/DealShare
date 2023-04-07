import useSWR from "swr";
import { fetcher } from "../fetch";

export function useManufacturers() {
  const { data, error } = useSWR("/api/manufacturers", fetcher);

  return {
    manufacturers: data,
    error,
    loading: !data && !error,
  };
}
