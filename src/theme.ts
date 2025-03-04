import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#556EE6" },
    secondary: { main: "#F1AC58" },
    error: { main: "#ef4444" },
    warning: { main: "#f97316" },
    info: { main: "#FFFFFF" },
    success: { main: "#7BB42D" },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: { primary: "#1f2937", secondary: "#6b7280" },
  },

  typography: {
    fontFamily: "poppins, Arial, sans-serif",
    h1: { fontSize: "22px", fontWeight: 400, color: "#6B6B82" },
    h6: { fontSize: "14px", fontWeight: 400 },
    h3: { fontSize: "18px", fontWeight: 500 },
    h4: { fontSize: "50px", fontWeight: 600 },

    subtitle1: { fontSize: "14px", fontWeight: 400 },
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
    MuiDrawer: {
      styleOverrides: {
        paper: { backgroundColor: " #2B3B5C", color: "black" },
        root: { backgroundColor: "#ffffff" },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#E1EDF7",
          color: "black",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none",
          },
        },
      },
    },
  },
});
