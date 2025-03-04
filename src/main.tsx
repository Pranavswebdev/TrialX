import { ThemeProvider } from "@mui/material/styles";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { theme } from "./theme";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>
);
