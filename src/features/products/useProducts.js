import { useQuery } from "@tanstack/react-query";
import { getProducts } from "./productsAPI";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
}