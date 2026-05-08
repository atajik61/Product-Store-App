import { useParams } from "react-router-dom";
import { useProducts } from "../features/products/useProducts";

import {
  Box,
  Typography,
  Card,
  CardMedia,
  Button,
  CircularProgress,
} from "@mui/material";

export default function ProductDetails() {
  const { id } = useParams();

  const { data, isLoading, isError } = useProducts();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Typography color="error">
      Failed to load product
    </Typography>;
  }

  // پیدا کردن محصول از لیست
  const product = data?.find(
    (item) => String(item.id) === id
  );

  if (!product) {
    return (
      <Typography>
        Product not found
      </Typography>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Card sx={{ p: 3 }}>
        <CardMedia
          component="img"
          image={product.thumbnail}
          alt={product.title}
          sx={{
            height: 300,
            objectFit: "contain",
          }}
        />

        <Typography variant="h5" mt={2} fontWeight="bold">
          {product.title}
        </Typography>

        <Typography mt={2} color="text.secondary">
          {product.description}
        </Typography>

        <Typography variant="h4" color="primary" mt={2}>
          ${product.price}
        </Typography>

        <Button variant="contained" sx={{ mt: 2 }}>
          Add to cart
        </Button>
      </Card>
    </Box>
  );
}