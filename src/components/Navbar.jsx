import { useMemo } from "react";
import { useSelector } from "react-redux";

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Stack,
  Button,
  Badge,
  TextField,
  IconButton,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";

import { selectCartCount } from "../features/cart/cartSlice";
import Logo from "./Logo";

export default function Navbar({
  onOpenCart,
  query,
  onQuery,
}) {
  const count = useSelector(selectCartCount);

  const badge = useMemo(
    () => (count > 99 ? "99+" : String(count)),
    [count]
  );

  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
      }}
    >
      <Container>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 1,
          }}
        >

          {/* LEFT - BRAND */}
          <Stack direction="row" alignItems="center" spacing={1}>
            <StorefrontIcon color="primary" />

            <Typography
              variant="h6"
              fontWeight="bold"
            >
              NovaMarket
            </Typography>
          </Stack>

          {/* CENTER - SEARCH */}
          <TextField
            size="small"
            placeholder="Search anything..."
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            sx={{
              width: { xs: 140, md: 320 },
              bgcolor: "#f5f5f5",
              borderRadius: 2,
            }}
          />

          {/* RIGHT - CART */}
          <Button
            variant="contained"
            startIcon={<ShoppingCartIcon />}
            onClick={onOpenCart}
            sx={{
              borderRadius: 3,
              textTransform: "none",
            }}
          >
            <Badge badgeContent={badge} color="error">
              Cart
            </Badge>
          </Button>

        </Toolbar>
      </Container>
    </AppBar>
  );
}