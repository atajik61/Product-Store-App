import { Container as MuiContainer } from "@mui/material";

export default function Container({ children }) {
  return (
    <MuiContainer maxWidth="lg" sx={{ py: 2 }}>
      {children}
    </MuiContainer>
  );
}