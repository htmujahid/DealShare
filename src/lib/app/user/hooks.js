import useSWR from "swr";
import { fetcher } from "../fetch";
export function useCurrentUser() {
  const { data, error } = useSWR("/api/users", fetcher);

  return {
    user: data,
    error,
    loading: !data && !error,
  };
}
