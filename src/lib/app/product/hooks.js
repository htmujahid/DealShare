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

export function useAdminProducts() {
  const { data, error } = useSWR(`/api/admin/products`, fetcher);

  return {
    products: data,
    error,
    loading: !data && !error,
  };
}

export function useProductsByManufacturer() {
  const { data, error } = useSWR(`/api/manufacturer/products`, fetcher);

  return {
    products: data,
    error,
    loading: !data && !error,
  };
}

export function useCategoryProducts(category, page, limit) {
  const { data, error } = useSWR(
    category && (page || page === 0) && limit
      ? `/api/products/category?category=${category}&page=${page}&limit=${limit}`
      : null,
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

export function useManufacturerProduct(id) {
  const { data, error } = useSWR(`/api/manufacturer/products/${id}`, fetcher);

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

export function useSearchedProducts(searchTerm, page, limit) {
  const { data, error } = useSWR(
    searchTerm && (page || page === 0) && limit
      ? `/api/products/search?searchTerm=${searchTerm}&page=${page}&limit=${limit}`
      : null,
    fetcher
  );

  return {
    products: data,
    error,
    loading: !data && !error,
  };
}

export function useProductCategories() {
  const { data, error } = useSWR(`/api/products/categories`, fetcher);

  return {
    categories: data,
    error,
    loading: !data && !error,
  };
}
