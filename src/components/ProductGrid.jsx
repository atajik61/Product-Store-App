import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <Grid container spacing={2}>
      {products.map((p) => (
        <Grid item key={p.id} xs={12} sm={6} md={4}>
          <ProductCard product={p} />
        </Grid>
      ))}
    </Grid>
  );
}