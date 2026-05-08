import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip,
  Stack,
  Rating,
} from "@mui/material";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <Card
    component={Link}
    to={`/product/${product.id}`}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        },
      }}
    >
      {/* IMAGE */}
      <Box
        sx={{
          height: 220,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#f9fafb",
          p: 2,
        }}
      >
        <CardMedia
          component="img"
          image={product.thumbnail}
          alt={product.title}
          sx={{
            maxHeight: 180,
            objectFit: "contain",
            transition: "0.3s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
      </Box>

      {/* CONTENT */}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: 48,
          }}
        >
          {product.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1, minHeight: 40 }}
        >
          {product.description?.slice(0, 80)}...
        </Typography>

        {/* CATEGORY + RATING */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
        >
          <Chip
            label={product.category}
            size="small"
            sx={{
              textTransform: "capitalize",
              fontWeight: 600,
            }}
          />

          <Rating
            value={product.rating}
            precision={0.5}
            readOnly
            size="small"
          />
        </Stack>

        {/* PRICE */}
        <Typography
          variant="h6"
          color="primary"
          fontWeight="bold"
          mt={2}
        >
          ${product.price}
        </Typography>

        {/* BUTTON */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 2,
            borderRadius: 2,
            fontWeight: "bold",
            textTransform: "none",
          }}
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}