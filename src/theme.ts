import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#3b82f6" },
    secondary: { main: "#f97316" },
    error: { main: "#ef4444" },
    warning: { main: "#f97316" },
    info: { main: "#9333ea" },
    success: { main: "#16a34a" },
    background: { default: "#f5f5f5", paper: "#ffffff" },
    text: { primary: "#1f2937", secondary: "#6b7280" },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: { fontSize: "22px", fontWeight: 400, color: "#6B6B82" },
    h6: { fontSize: "1.125rem", fontWeight: 500 },
    body1: { fontSize: "0.875rem", fontWeight: 400 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "6px",
          padding: "6px 16px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: { backgroundColor: "#ffffff" },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#f5f5f5",
          color: "#1f2937",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        },
      },
    },
  },
});
