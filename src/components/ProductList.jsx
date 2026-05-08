import { useSelector, useDispatch } from "react-redux";
import { useProducts } from "../features/products/useProducts";

import {
  setCategory,
  setQuery,
  setSort,
} from "../features/products/productsSlice";

import {
  Box,
  Grid,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";

import ProductCard from "./ProductCard";
import Toolbar from "./Toolbar";

export default function ProductList() {
  const dispatch = useDispatch();

  const { data, isLoading, isError, error } =
    useProducts();

  // Redux filter state
  const { category, query, sort } = useSelector(
    (state) => state.products
  );

  // DummyJSON products
  const products = data || [];

  // Categories
  const categories = [
    "all",
    ...new Set(products.map((p) => p.category)),
  ];

  // Filter + Search + Sort
  const filteredProducts = products
    ?.filter((product) => {
      const matchCategory =
        category === "all" ||
        product.category === category;

      const matchQuery =
        product.title
          .toLowerCase()
          .includes(query.toLowerCase());

      return matchCategory && matchQuery;
    })
    ?.sort((a, b) => {
      if (sort === "price-asc") {
        return a.price - b.price;
      }

      if (sort === "price-desc") {
        return b.price - a.price;
      }

      return 0;
    });

  // Loading
  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          py: 8,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // Error
  if (isError) {
    return (
      <Alert severity="error">
        {error.message}
      </Alert>
    );
  }

  return (
    <Box>
      {/* Toolbar */}
      <Toolbar
        categories={categories}
        category={category}
        query={query}
        sort={sort}
        onCategory={(value) =>
          dispatch(setCategory(value))
        }
        onQuery={(value) =>
          dispatch(setQuery(value))
        }
        onSort={(value) =>
          dispatch(setSort(value))
        }
      />

      {/* Empty state */}
      {filteredProducts?.length === 0 ? (
        <Typography>
          No products found.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {filteredProducts?.map((product) => (
            <Grid
              key={product.id}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
                lg: 3,
              }}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}