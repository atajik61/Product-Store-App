import { useState } from "react";

import { Box, Container, Typography } from "@mui/material";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartDrawer from "./components/CartDrawer";

import { useSettings } from "./context/SettingsContext";
import { Routes, Route } from "react-router-dom";

import ProductDetails from "./pages/ProductDetails";

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const { state } = useSettings();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: state.theme === "dark" ? "grey.900" : "grey.50",
        color: state.theme === "dark" ? "white" : "black",
        transition: "0.3s",
      }}
    >
      {/* Navbar */}
      <Navbar onOpenCart={() => setCartOpen(true)} />

      {/* Main */}
      <Container sx={{ py: 4 }}>
        <Box mb={4}>
          <Typography variant="h4" fontWeight="bold">
          NovaMarket
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            mt={1}
            sx={{ maxWidth: 700 }}
          >
            
          </Typography>
        </Box>

        <Routes>
          <Route path="/" element={<ProductList />} />

          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          borderTop: "1px solid",
          borderColor: "divider",
          py: 3,
          mt: 5,
        }}
      >
        <Container>
          <Typography variant="caption" color="text.secondary">
            Product Store App • React + Redux Toolkit + React Query + MUI
          </Typography>
        </Container>
      </Box>

      {/* Cart */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </Box>
  );
}
