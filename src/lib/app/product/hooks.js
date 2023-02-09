import useSWR from "swr";
import { fetcher } from "../fetch";

export function useProducts(limit) {
  const { data, error } = useSWR(`/api/products?limit=${limit}`, fetcher);

  return {
    products: data,
    error,
    loading: !data && !error,
  };
}

export function useCategoryProducts(category, limit) {
  const { data, error } = useSWR(
    `/api/products/category?category=${category}&limit=${limit}`,
    fetcher
  );

  return {
    products: data,
    error,
    loading: !data && !error,
  };
}

export function useProduct(id) {
  const { data, error } = useSWR(id ? `/api/products/${id}` : null, fetcher);

  return {
    product: data,
    error,
    loading: !data && !error,
  };
}

export function useProductFeedbacks(id) {
  const { data, error } = useSWR(
    id ? `/api/products/${id}/feedback` : null,
    fetcher
  );

  return {
    feedbacks: data,
    error,
    loading: !data && !error,
  };
}

export function useProductQuestions(id) {
  const { data, error } = useSWR(
    id ? `/api/products/${id}/question` : null,
    fetcher
  );

  return {
    questions: data,
    error,
    loading: !data && !error,
  };
}

export function useRelatedProducts(id, category, limit) {
  const { data, error } = useSWR(
    id
      ? `/api/products/${id}/related-products?category=${category}&limit=${limit}`
      : null,
    fetcher
  );

  return {
    products: data,
    error,
    loading: !data && !error,
  };
}
