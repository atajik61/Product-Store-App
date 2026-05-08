import {
  Box,
  Typography,
  TextField,
  Stack,
  Divider,
  Paper,
} from "@mui/material";

import CategoryFilter from "./CategoryFilter";
import SortSelect from "./SortSelect";

export default function Toolbar({
  categories,
  category,
  onCategory,
  query,
  onQuery,
  sort,
  onSort,
}) {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 3,
        mb: 4, // 👈 فاصله بیشتر از کارت‌ها
      }}
    >
      {/* HEADER */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        spacing={2}
      >
        <Box>
          <Typography variant="h6" fontWeight={700}>
            Explore Products
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Search, filter and sort from hundreds of items
          </Typography>
        </Box>

        {/* SEARCH + SORT */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{
            width: { xs: "100%", md: "auto" },
          }}
        >
          <TextField
            size="small"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder="Search products..."
            sx={{
              width: { xs: "100%", sm: 280 },
            }}
          />

          <SortSelect value={sort} onChange={onSort} />
        </Stack>
      </Stack>

      <Divider sx={{ my: 3 }} />

      {/* CATEGORY */}
      <Box>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ mb: 1, display: "block" }}
        >
          Categories
        </Typography>

        <CategoryFilter
          categories={categories}
          value={category}
          onChange={onCategory}
        />
      </Box>
    </Paper>
  );
}