import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decQty,
  incQty,
  removeFromCart,
  selectCartTotal,
} from "../features/cart/cartSlice";

import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  Stack,
  Divider,
  Avatar,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

export default function CartDrawer({ open, onClose }) {
  const dispatch = useDispatch();

  const items = useSelector((s) => s.cart.items);
  const total = useSelector(selectCartTotal);

  const itemCount = items.reduce((sum, it) => sum + it.qty, 0);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 380, display: "flex", flexDirection: "column", height: "100%" }}>

        {/* Header */}
        <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box>
            <Typography fontWeight="bold">Bazaar-e-Noor Cart</Typography>
            <Typography variant="caption" color="text.secondary">
              {items.length} items • {itemCount} total
            </Typography>
          </Box>

          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider />

        {/* Body */}
        <Box sx={{ flex: 1, overflow: "auto", p: 2 }}>
          {items.length === 0 ? (
            <Typography textAlign="center" mt={5} color="text.secondary">
              Your cart is empty
            </Typography>
          ) : (
            <Stack spacing={2}>
              {items.map((it) => (
                <Box
                  key={it.id}
                  sx={{
                    display: "flex",
                    gap: 2,
                    p: 2,
                    border: "1px solid #eee",
                    borderRadius: 2,
                  }}
                >
                  <Avatar
                    variant="square"
                    src={it.thumbnail}
                    sx={{ width: 60, height: 60, objectFit: "contain" }}
                  />

                  <Box sx={{ flex: 1 }}>
                    <Typography fontWeight="bold" noWrap>
                      {it.title}
                    </Typography>

                    <Typography variant="caption" color="text.secondary">
                      Unit: ${it.price.toFixed(2)}
                    </Typography>

                    <Typography fontWeight="bold" mt={1}>
                      ${(it.price * it.qty).toFixed(2)}
                    </Typography>

                    {/* controls */}
                    <Stack direction="row" alignItems="center" spacing={1} mt={1}>
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => dispatch(decQty(it.id))}
                      >
                        -
                      </Button>

                      <Typography>{it.qty}</Typography>

                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => dispatch(incQty(it.id))}
                      >
                        +
                      </Button>

                      <Button
                        size="small"
                        color="error"
                        onClick={() => dispatch(removeFromCart(it.id))}
                      >
                        Remove
                      </Button>
                    </Stack>
                  </Box>
                </Box>
              ))}
            </Stack>
          )}
        </Box>

        <Divider />

        {/* Footer */}
        <Box sx={{ p: 2 }}>
          <Typography fontWeight="bold">
            Total: ${total.toFixed(2)}
          </Typography>

          <Stack direction="row" spacing={1} mt={2}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => dispatch(clearCart())}
              disabled={items.length === 0}
            >
              Clear
            </Button>

            <Button
              fullWidth
              variant="contained"
              disabled={items.length === 0}
              onClick={() => alert("Checkout coming soon")}
            >
              Checkout
            </Button>
          </Stack>
        </Box>

      </Box>
    </Drawer>
  );
}